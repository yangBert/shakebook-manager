import * as React from 'react';
import styles from './index.module.css';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 3, span: 24 },
};
const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return <div className={styles.background}>

    <div className={styles.center}>
      <h1 className={styles.title}>shakebook</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>保存登录信息</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit" size="large">
            登录
        </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
}

export default Login



