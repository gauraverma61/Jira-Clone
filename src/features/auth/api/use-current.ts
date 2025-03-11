import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

export const useCurrent = () => {
    const query = useQuery({
        queryKey: ["current"],
        queryFn: async () => {
            const response = await client.api.auth.current.$get();
            if (!response.ok) {
                return null;
            }
            const data = response.json();
            return data
        },
        refetchInterval: 60 * 1000, // refetch every minute
    })
    return query
}