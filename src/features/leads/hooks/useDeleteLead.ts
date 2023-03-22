import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteLead } from '@features/leads/api'

export const useDeleteLead = () => {
  const queryClient = useQueryClient()

  return useMutation(deleteLead, {
    onSuccess: (res) => {
      queryClient.invalidateQueries(['leads'])
    },
  })
}
