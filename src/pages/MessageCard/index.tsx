import { Card, Row, Col } from 'antd';
import React from 'react';

interface Jporps {
   data:any;
}


const MessageCard:React.FC<Jporps>= (props) =>{
    if(!props.data){
      return(
        <div>啥也没查到</div>
      );
    }
    return(
        <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="标准体重" bordered={false}>
              {props.data.idealWeight}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="肥胖等级" bordered={false}>
              <span>等级{props.data.level}</span>
              <span>{props.data.levelMsg}</span>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="正常体重范围" bordered={false}>
              {props.data.normalWeight}
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
        <Col span={8}>
            <Card title="相关疾病发病危险" bordered={false}>
              {props.data.danger}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="	BMI指数" bordered={false}>
              {props.data.bmi}
            </Card>
          </Col>
          <Col span={8}>
            <Card title="BMI指数范围" bordered={false}>
              {props.data.normalBMI}
            </Card>
          </Col>
        </Row>
      </div>
    );
}
export default MessageCard;