import { ReloadOutlined } from '@ant-design/icons'
import {
  ILeadForm,
  ILeadFormData,
  IRoleOption,
  Roles,
} from '@features/leads/types'
import MaskInput from '@shared/components/ui/MaskInput'
import { Button, Form, Input, Select, Tooltip } from 'antd'
import { FC, useEffect } from 'react'

const ROLE_OPTIONS: IRoleOption[] = Object.entries(
  Roles,
).map((item: [string, string]) => ({ value: item[0], label: item[1] }))

const LeadForm: FC<ILeadForm> = ({
  onSubmit,
  form,
  onReset,
  isLoading,
}: ILeadForm) => {
  const [formInstance] = Form.useForm()

  useEffect(() => {
    if (formInstance) {
      if (!form) {
        formInstance.resetFields()
        return
      }
      formInstance.setFieldsValue(form)
    }
  }, [form])

  const onFinish = (values: ILeadFormData) => {
    onSubmit(values)
  }

  const resetHandler = (values: ILeadFormData) => {
    onReset(null)
  }

  return (
    <Form
      form={formInstance}
      name="basic"
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      initialValues={form}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Organization"
        name="organization"
        rules={[{ required: true, message: 'Please input organization!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: 'Please select role!' }]}
      >
        <Select options={ROLE_OPTIONS} />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: 'Please input phone number!' }]}
      >
        <MaskInput format="+1 (###) ###-####" />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 24 }}>
        <div className="flex">
          <Button
            loading={isLoading}
            size="large"
            type="primary"
            className="w-full flex-1 mr-4"
            htmlType="submit"
          >
            Save
          </Button>
          <Tooltip title="Clear">
            <Button
              onClick={resetHandler}
              icon={<ReloadOutlined />}
              size="large"
              type="default"
              className="w-full"
            />
          </Tooltip>
        </div>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 4 }}></Form.Item>
    </Form>
  )
}

export default LeadForm
