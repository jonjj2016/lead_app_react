import React, { RC } from 'react'
import PropTypes from 'prop-types'
import { Leads } from '@features/leads'

const LeadsPage: RC = () => {
  return (
    <div className="app-page">
      <Leads />
    </div>
  )
}

export default LeadsPage
