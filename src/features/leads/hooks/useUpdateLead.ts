import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateLead } from '@features/leads/api'
import { IMutationOptions } from '@shared/types/hooks'

export const useUpdateLead = ({ onSuccess }: IMutationOptions) => {
  const queryClient = useQueryClient()

  return useMutation(updateLead, {
    onSuccess: (res) => {
      queryClient.invalidateQueries(['leads', {}])
      onSuccess && onSuccess(res)
    },
  })
}
