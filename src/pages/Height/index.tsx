import { Button, Form, Input, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import './index.css'

const Height = ()=>{
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
                    label="父亲身高"
                    name="pHeight"
                    rules={[{ required: true, message: 'Please input your father Height!' }]}
                >
                    <Input style={{width:200}}/>
                </Form.Item>
                <Form.Item
                    label="母亲身高"
                    name="mHeight"
                    rules={[{ required: true, message: 'Please input your mother Height!' }]}
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
    <div className="Height">
        <App /> 
        <div className='HeightMessage'>
        </div>
    </div>
    
    );
}
export default Height;