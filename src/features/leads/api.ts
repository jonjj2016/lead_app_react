import fetcher from '../../shared/lib/fetcher'
import { AxiosRequestConfig } from 'axios'
import { ILeadFormData, ILeadSelectedFormData, LeadIdType } from './types'

export const getLeads = (params) => {
  return fetcher.get('leads?_sort=id&_order=desc', {
    params: params.queryKey[1],
  })
}

export const createLead = (config: AxiosRequestConfig) => {
  return fetcher.post('leads', config)
}

export const updateLead = ({ id, method = 'put', ...rest }) => {
  return fetcher[method](`leads/${id}`, rest)
}

export const deleteLead = (id: LeadIdType) => {
  return fetcher.delete(`leads/${id}`)
}
