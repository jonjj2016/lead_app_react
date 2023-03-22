export enum Roles {
  Ceo = 'Ceo',
  Manager = 'Manager',
  AccountManager = 'Account Manager',
  Owner = 'Owner',
  Operations = 'Operations',
  BoardMember = 'Board Member',
}

export enum LeadCardActions {
  Delete,
  Select,
  DoubleClick,
}

export type LeadIdType = string | number | null

export interface ILeadSelectedFormData {
  selected?: boolean
}

export interface IActiveLead extends ILeadSelectedFormData {
  id?: LeadIdType
  value?: ILead
}

export interface ILeadFormData {
  firstName: 'string'
  lastName: 'string'
  organization: 'string'
  role: 'string'
  email: 'string'
  phone: 'string'
}

export interface ILead extends ILeadFormData {
  id: LeadIdType
  selected?: boolean
}

export interface ILeadCard extends ILead {
  onAction: (
    value: number | string,
    type: LeadCardActions,
    selected?: boolean,
  ) => void
  selected: boolean
}

export interface ILeadList {
  onSelect: (value: LeadIdType | ILead, selected?: boolean) => void
}

export interface IRoleOption {
  value: 'string'
  label: 'string'
}

export interface ILeadForm {
  onSubmit: (values: ILeadFormData) => void
  onReset: (values: ILeadFormData | null) => void
  form: ILeadFormData
  isLoading: boolean
}

export interface ILeadFormWrapper {
  activeLead: IActiveLead | null
}

export interface ILeadFilterParams {
  q?: string
  selected?: boolean | null
}

export interface IFilterForm {
  onSearch: (values: ILeadFilterParams) => void
}
