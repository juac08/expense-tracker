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
    <ScrollTop/>
    {history.length>0 &&  <Chart/>}
    <Items/>
    <Footer/>
    </>
  );
}

export default App;
