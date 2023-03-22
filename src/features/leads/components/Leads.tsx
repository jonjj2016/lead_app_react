import { Col, Row } from 'antd'
import { FC, useState } from 'react'
import { LeadIdType } from '@features/types'
import LeadsList from '@features/leads/components/LeadsList'
import LeadFormWrapper from '@features/leads/components/LeadFormWrapper'
import { IActiveLead } from '@features/leads/types'
import { ILead } from '@features/leads/types'

const Leads: FC = () => {
  const [activeLead, setActiveLead] = useState<IActiveLead | ILead | null>(null)
  const selectHandler = (value: LeadIdType | ILead, selected?: boolean) => {
    setActiveLead({ value, selected })
  }

  return (
    <Row gutter={24} className="p-5">
      <Col md={9} lg={7} xs={24}>
        <LeadFormWrapper activeLead={activeLead} />
      </Col>
      <Col md={15} lg={17} xs={24}>
        <LeadsList onSelect={selectHandler} />
      </Col>
    </Row>
  )
}

export default Leads
