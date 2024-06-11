import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select('*');

    if (error) {
        throw new Error(error);
    }

    return data;
}

export async function createCabin(newCabin) {
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

    const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    const { data, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabin, image: imagePath }]);

    if (error) {
        throw new Error(error);
    }

    const { error: storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image);

    if (storageError) {
        deleteCabin(data.id);
        throw new Error('Cabin image could not be uploaded and the cabin was not created');
    }


    return data;

}

export async function deleteCabin(id) {
    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id);

    if (error) {
        throw new Error(error);
    }

    return data;
}