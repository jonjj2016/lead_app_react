import { Col, Modal, Row } from 'antd'
import { FC, useCallback, useState } from 'react'
import MessageBox from '@shared/components/ui/MessageBox'
import { useDeleteLead } from '@features/leads/hooks/useDeleteLead'
import { useLeads } from '@features/leads/hooks/useLeads'
import {
  ILead,
  ILeadFilterParams,
  ILeadList,
  LeadCardActions,
  LeadIdType,
  Roles,
} from '@features/leads/types'
import FilterForm from '@features/leads/components/forms/FilterForm'
import LeadCard from '@features/leads/components/LeadCard'

const LeadsList: FC<ILeadList> = ({ onSelect }: ILeadList) => {
  const [filters, setFilters] = useState<ILeadFilterParams>({})
  const { data, isSuccess, isLoading } = useLeads(filters)
  const { mutate } = useDeleteLead()
  const showLoading = !isLoading && !data?.length
  const onSearch = (params: ILeadFilterParams) => {
    setFilters(params)
  }

  const actionHandler = useCallback(
    (id: LeadIdType, action: LeadCardActions, selected: boolean) => {
      switch (action) {
        case LeadCardActions.Select:
          onSelect(data.find((item: ILead) => String(id) === String(item.id)))
          break
        case LeadCardActions.Delete:
          Modal.confirm({
            title: 'Are you sure you want to delete this lead?',
            onOk: () => mutate(id),
          })
          break
        case LeadCardActions.DoubleClick:
          onSelect(id, !selected)
          break
      }
    },
    [data],
  )

  return (
    <div>
      <FilterForm onSearch={onSearch} />
      <Row gutter={8}>
        {isSuccess &&
          data.map((item: ILead) => (
            <Col lg={8} md={12} sm={12} key={item.id} className="mb-2">
              <LeadCard
                selected={item.selected}
                firstName={item.firstName}
                lastName={item.lastName}
                phone={item.phone}
                id={item.id}
                onAction={actionHandler}
                organization={item.organization}
                role={Roles[item.role as keyof typeof Roles]}
                email={item.email}
              />
            </Col>
          ))}
      </Row>
      <MessageBox title={'Data not found...'} show={showLoading} />
    </div>
  )
}

export default LeadsList
