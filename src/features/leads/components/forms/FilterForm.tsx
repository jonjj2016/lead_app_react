import { Col, Form, Input, Row, Switch } from 'antd'
import { FC, useEffect, useState } from 'react'
import useDebounce from '@shared/hooks/useDebounce'
import { IFilterForm } from '@features/leads/types'

const INPUT_MIN_SYMBOLS = 3
const FilterForm: FC<IFilterForm> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('')
  const [isSelected, setIsSelected] = useState(false)
  const debouncedSearchValue: string = useDebounce(searchValue, 500)

  useEffect(() => {
    onSubmit()
  }, [debouncedSearchValue, isSelected])

  const onSubmit = () => {
    if (
      debouncedSearchValue.length >= INPUT_MIN_SYMBOLS ||
      !debouncedSearchValue
    ) {
      onSearch({
        selected: isSelected || null,
        q: debouncedSearchValue,
      })
    }
  }

  const selectChangeHandler = () => {
    setIsSelected((prevValue) => !prevValue)
  }

  return (
    <Form labelCol={{ span: 12 }} className="w-full">
      <div className="flex mt-5">
        <Input.Search
          size="large"
          onSearch={onSubmit}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Form.Item
          className="min-w-[120px] ml-3"
          name="switch"
          label="Selected"
          valuePropName="checked"
          wrapperCol={{ span: 5 }}
        >
          <Switch checked={isSelected} onChange={selectChangeHandler} />
        </Form.Item>
      </div>
    </Form>
  )
}

export default FilterForm
