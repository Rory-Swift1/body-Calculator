import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import {requestBMI} from '../../api/http'

const Bmi = ()=>{
    const [bmidata,setBmidata] = useState([])

    interface DataType {
        type: string;
        WHO: string;
        Asian: string;
        China: string;
      }
      
      const columns: ColumnsType<DataType> = [
        {
          title: '标准等级',
          dataIndex: 'type',
          key: 'type'
        },
        {
          title: '	世界卫生组织标准范围',
          dataIndex: 'WHO',
          key: 'WHO',
        },
        {
          title: '亚洲标准范围',
          dataIndex: 'Asian',
          key: 'Asian',
        },
        {
          title: '中国标准范围',
          key: 'China',
          dataIndex: 'China',
        },
      ];
      
      useEffect(()=>{
      },[])
      
      const App: React.FC = () => <Table columns={columns} dataSource={bmidata} />;
    
    const abc =()=>{
      const a = requestBMI().then((res:any)=>{return res.data.result})
      console.log(a)
    }  

    return (
    <div className="Bmi">
        <App />
        <button onClick={abc}></button>
    </div>
    );
}
export default Bmi;