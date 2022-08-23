import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import { Suspense } from 'react'; 

//路由文件进行懒加载
const Weight = React.lazy(()=>import('./pages/Weight/index'));
const Height = React.lazy(()=>import('./pages/Height/index'));
const Bmi = React.lazy(()=>import('./pages/Bmi/index'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//通过suspense的fallback来指定加载时的动画
root.render(
  <BrowserRouter>
  <Suspense fallback={<div>loading.....</div>}>
  <Routes>
    <Route path='/' element={<App />}>
      <Route path='weight' element={<Weight />} />
      <Route path='height' element={<Height />} />
      <Route path='bmi' element={<Bmi />} />
    </Route>
  </Routes>
    </Suspense>
  </BrowserRouter>
);