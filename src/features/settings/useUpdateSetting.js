import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingsApi } from "../../services/apiSettings";

export function useUpdateSetting() {
    const queryClient = useQueryClient();

    const { mutate: updateSetting, isPending: isUpdating } = useMutation({
        mutationFn: updateSettingsApi,
        onSuccess: () => {
            toast.success("Setting successfully updated");
            queryClient.invalidateQueries({ queryKey: ["settings"] });
        },
        onError: (err) => toast.error(err.message),
    });

    return { isUpdating, updateSetting };
}