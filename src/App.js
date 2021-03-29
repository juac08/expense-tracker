import './App.css';
import Items from './items'
import ScrollTop from './navbar'
import Footer from './footer'
import Chart from './chart'
import { useGlobalContext } from "./context";

function App() {
  const { history} = useGlobalContext();

  return (
    <>
    <div className='container'>
    <ScrollTop/>
    {history.length>0 &&  <Chart/>}
    <Items/>
    </div>
    <div className='end'>
    <Footer/>
    </div>
   
    
    </>
  );
}

export default App;
