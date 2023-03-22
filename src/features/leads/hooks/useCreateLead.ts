import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createLead } from '@features/leads/api'
import { IMutationOptions } from '@shared/types/hooks'

export const useCreateLead = ({ onSuccess }: IMutationOptions) => {
  const queryClient = useQueryClient()

  return useMutation(createLead, {
    onSuccess: (res) => {
      queryClient.invalidateQueries(['leads', {}])
      onSuccess && onSuccess(res)
    },
  })
}
