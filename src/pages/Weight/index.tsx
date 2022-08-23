import { Button, Form, Input, Select, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import './index.css'
import MessageCard from '../MessageCard';

const Weight = () => {
    const { Option } = Select;
    const App: React.FC = () => {

        const [value,setValue] = useState(1);

        const onChange = (e: RadioChangeEvent) => {
            console.log('radio checked', e.target.value);
            setValue(e.target.value);
          };

        const onFinish = (values: any) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };

        return (
            <Form 
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item 
                   label="Sex"
                   name="Sex"
                   rules={[{required:true}]}
                >
                    <Radio.Group  value={value} onChange={onChange}>
                        <Radio value={1}>男</Radio>
                        <Radio value={2}>女</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item 
                label="Role"
                name="Role"
                >
                    <Select style={{width:200}}>
                        <Option value='1'>中国</Option>
                        <Option value="2">亚洲</Option>
                        <Option value="3">国际</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Height"
                    name="Height"
                    rules={[{ required: true, message: 'Please input your Height!' }]}
                >
                    <Input style={{width:200}}/>
                </Form.Item>
                <Form.Item
                    label="Weight"
                    name="Weight"
                    rules={[{ required: true, message: 'Please input your Weight!' }]}
                >
                    <Input style={{width:200}}/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    };

    return (
        <div className="Weight">
            <App />
        <div className='message'>
          <MessageCard />
        </div>
        </div>
    );
}
export default Weight;