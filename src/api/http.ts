//该文件用来封装异步请求函数
import qs from 'qs';
import service from '.';

//聚合API接口key
const Juhe_key = '5d5b11a66f34135b0760012ec233c0b1';

//获取标准体重的函数
interface WeightData {
    sex:number;
    role:string;
    height:string;
    weight:string;
}


const requestWeight =(data:WeightData)=>{
    const httpQuery = {
        key:Juhe_key,
        ...data
    }
    return new Promise((resolve,reject)=>{
     service({
        url:'weight',
        method:'POST',
        data:qs.stringify(httpQuery)
    }).then((respones)=>{
      resolve(respones.data.result)
    }).catch((err)=>{
      reject(err)
    })
})
}

const requestBMI =()=>{
 return new Promise((resolve,reject)=>{
    service({
      url:'bmi',
      method:'POST',
      data:qs.stringify({key:Juhe_key})
    }).then((res)=>{
      resolve(res)
    }).catch((err)=>
     reject(err)
    )
 })
}


export {
  requestWeight,
  requestBMI
};