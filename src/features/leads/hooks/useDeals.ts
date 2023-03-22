import { useQuery } from '@tanstack/react-query'
import { getDeals } from '@features/leads/api'

export const useDeals = (params: any) => {
  return useQuery({
    queryKey: ['leads'],
    queryFn: () => getDeals(params),
  })
}
