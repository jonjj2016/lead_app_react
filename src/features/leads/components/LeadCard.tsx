import { CloseOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import classNames from 'classnames'
import React, { memo, FC } from 'react'
import { ILeadCard, LeadCardActions } from '@features/leads/types'

const LeadCard: FC<ILeadCard> = ({
  lastName,
  selected,
  firstName,
  email,
  organization,
  id,
  onAction,
  role,
  phone,
}: ILeadCard) => {
  const onDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    onAction(id, LeadCardActions.Delete)
  }

  const onSelect = () => {
    onAction(id, LeadCardActions.Select)
  }

  const onDoubleClick = () => {
    onAction(id, LeadCardActions.DoubleClick, selected)
  }

  return (
    <Card
      onClick={onSelect}
      className={classNames('cursor-pointer border-2', {
        'border-[#1F8519]': selected,
      })}
      onDoubleClick={onDoubleClick}
      title={`${firstName} ${lastName}`}
      extra={
        <Button
          onClick={onDelete}
          type="ghost"
          shape="circle"
          icon={<CloseOutlined />}
        />
      }
    >
      <div className="select-none">
        <p>Role: {role}</p>
        <p>Organization: {organization}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </Card>
  )
}

export default memo(LeadCard)
