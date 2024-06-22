import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
    const { mutate: signup, isPending, reset } = useMutation({
        mutationFn: signupApi,

        onSuccess: () => {
            toast.success('Account successfully created')
        },
    });

    return { signup, isPending, reset };
}