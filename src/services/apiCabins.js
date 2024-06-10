import supabase from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select('*');

    if (error) {
        throw new Error(error);
    }

    return data;
}

export async function createCabin(newCabin) {
    const { data, error } = await supabase
        .from('cabins')
        .insert([newCabin]);

    if (error) {
        throw new Error(error);
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