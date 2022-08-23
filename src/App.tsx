import './css/app.css'
import Header from './components/Header';
import Middle from './components/Middle';
import 'antd/dist/antd.min.css';

const App=()=> {
  return (
    <div className="App">
      <Header />
      <Middle />
    </div>
  );
}

export default App;
