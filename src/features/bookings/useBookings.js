import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();

    const filterValue = searchParams.get('status');
    const filter = !filterValue || filterValue === 'all'
        ? null
        : { field: 'status', value: filterValue };

    const sortByRaw = searchParams.get('sortBy') || 'startDate-desc';
    const [field, direction] = sortByRaw.split('-');
    const sortBy = { field, direction };

    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const {
        isPending,
        data: { data: bookings, count } = {},
        error
    } = useQuery({
        queryKey: ['bookings', filter, sortBy, page],
        queryFn: () => getBookings({ filter, sortBy, page }),
    });

    const pageCount = Math.ceil(count / PAGE_SIZE);

    const preFetchPage = (targetPage) => {
        queryClient.prefetchQuery({
            queryKey: ['bookings', filter, sortBy, targetPage],
            queryFn: () => getBookings({ filter, sortBy, page: targetPage }),
        });
    }

    if (page < pageCount) {
        preFetchPage(page + 1);
    }

    if (page > 1) {
        preFetchPage(page - 1);
    }

    return { isPending, error, bookings, count };
}