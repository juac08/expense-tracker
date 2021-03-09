import React,{useState,useEffect,useContext} from 'react';
const AppContext =React.createContext();
const getLocalStorage = () => {
    let history = localStorage.getItem("history");
    if (history) {
      return (history = JSON.parse(localStorage.getItem("history")));
    } else {
      return [];
    }
  };
const AppProvider = ({children}) => {
    const [data,setData]=useState({title:"",amount:""});
    const [history, setHistory] = useState(getLocalStorage());
    const date = new Date().toString().split(" ").splice(1, 2).join(" ");
    const handleData=(e)=>{
         const name=e.target.name;
         const value=e.target.value
         setData({ ...data, [name]: value });
       }
       const handleSubmit = (e) => {
          e.preventDefault();
          if (data.title && data.amount) {
            const newData = { ...data, id: new Date().getTime().toString()};
            setHistory([...history, newData]);
            setData({ title: "", amount: ""});
          }
         };
         useEffect(() => {
          localStorage.setItem("history", JSON.stringify(history));
        }, [history]);
        const removeItem=(id)=>{
          setHistory(history.filter((item) => item.id !== id));
        }
     const amounts = history.map(transaction => transaction.amount);
     var a = amounts.map(Number);
      const income = a
        .filter(item => item > 0)
        .reduce((acc, item) => (acc = acc + item), 0);
      const expense = (
        a.filter(item => item < 0)
        .reduce((acc, item) => (acc = acc + item), 0)
      );
     const total = a.reduce((acc, item) => (acc = acc + item), 0);
    return (
        <AppContext.Provider
            value={{
                date,
                history,
                setHistory,
                handleData,
                handleSubmit,
                total,
                expense,
                income,
                removeItem,
                data,
                setData,
            }}>
            {children}
            
        </AppContext.Provider>
            )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export default AppProvider;

