import { Card, Row, Col } from 'antd';
import React from 'react';

const MessageCard: React.FC = () =>{
    return(
        <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    );
}
export default MessageCard;