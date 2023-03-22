import { getLeads } from '@features/leads/api'
import { ILeadFilterParams } from '@features/leads/types'
import { useQuery } from '@tanstack/react-query'

export const useLeads = (filters: ILeadFilterParams) => {
  return useQuery({
    queryKey: !filters ? ['leads'] : ['leads', filters],
    queryFn: (params) => getLeads(params),
    keepPreviousData: true,
  })
}
