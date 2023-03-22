import React, { FC, useEffect } from 'react'
import { Card } from 'antd'
import { IActiveLead, ILeadFormWrapper } from '@features/leads/types'
import { useCreateLead } from '@features/leads/hooks/useCreateLead'
import { useFormData } from '@features/leads/hooks/useFormData'
import { useUpdateLead } from '@features/leads/hooks/useUpdateLead'
import { ILeadFormData } from '@features/types'
import LeadForm from '@features/leads/components/forms/LeadForm'

const LeadFormWrapper: FC<ILeadFormWrapper> = ({ activeLead }) => {
  const [formData, setValue] = useFormData()
  const { isLoading: createIsLoading, mutate: onCreate } = useCreateLead({
    onSuccess: () => onResetForm(),
  })
  const { isLoading: updateIsLoading, mutate: onUpdate } = useUpdateLead({
    onSuccess: () => onResetForm(),
  })
  const formIsLoading = createIsLoading || updateIsLoading

  useEffect(() => {
    if (activeLead) {
      selectLeadHandler(activeLead)
    }
  }, [activeLead])

  const onSubmitForm = (values: ILeadFormData) => {
    if (formData) {
      onUpdate({ id: formData.id, ...values, selected: formData?.selected })
      return
    }
    setValue(values)
    onCreate(values)
  }

  const onResetForm = () => {
    setValue(null)
  }

  const selectLeadHandler = ({ value, selected }: IActiveLead) => {
    if (typeof selected === 'boolean') {
      onUpdate({ id: value, selected, method: 'patch' })
      return
    }
    setValue(value)
  }

  return (
    <Card title="Lead Form">
      <LeadForm
        onReset={onResetForm}
        isLoading={formIsLoading}
        onSubmit={onSubmitForm}
        form={formData}
      />
    </Card>
  )
}

export default LeadFormWrapper
