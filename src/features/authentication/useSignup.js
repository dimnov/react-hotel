import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const { mutate: signup, isPending, reset } = useMutation({
        mutationFn: signupApi,

        onSuccess: () => {
            toast.success('Account successfully created')
        },

        // onError: () => {
        //     toast.error('There was a problem with creating a user')
        // }
    })

    return { signup, isPending, reset };
}