import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { ILead, LeadIdType } from '@features/leads/types'

export const useFormData = () => {
  const [data, setData] = useState<any>()
  const query = useQueryClient()

  const setValue = (value: LeadIdType | ILead) => {
    if (!value) {
      setData(null)
      return
    }

    if (typeof value === 'object') {
      setData(value)
      return
    }

    const queryData: ILead[] = query.getQueryData(['leads', {}]) || []
    setData(queryData.find((item: ILead) => item.id === value))
  }

  return [data, setValue]
}
