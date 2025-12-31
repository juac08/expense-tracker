import React,{useState,useEffect,useContext} from 'react';
import { toast } from 'react-toastify';
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
    const [data,setData]=useState({title:"",amount:"", type:"income"});
    const [history, setHistory] = useState(getLocalStorage());
    const [editingId, setEditingId] = useState(null);
    const date = new Date().toString().split(" ").splice(1, 2).join(" ");
    const formatCurrency = (value)=> new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK', maximumFractionDigits: 0 }).format(Number(value) || 0);
    const handleData=(e)=>{
         const name=e.target.name;
         const value=e.target.value
         setData({ ...data, [name]: value });
       }
       const handleSubmit = (e) => {
          e.preventDefault();
          if (!(data.title && data.amount)) {
            toast.warn('Please add a description and amount');
            return;
          }
          const numericAmount = Math.abs(Number(data.amount));
          if (Number.isNaN(numericAmount)) {
            toast.warn('Amount must be a number');
            return;
          }
          const signedAmount = data.type === 'expense' ? -numericAmount : numericAmount;
          if (editingId) {
            const updatedHistory = history.map(item =>
              item.id === editingId ? { ...item, title: data.title, amount: signedAmount } : item
            );
            setHistory(updatedHistory);
            setEditingId(null);
            setData({ title: "", amount: "", type: "income"});
            toast.success('Transaction updated');
            return;
          }
          const newData = { title: data.title, amount: signedAmount, id: new Date().getTime().toString()};
          setHistory([...history, newData]);
          setData({ title: "", amount: "", type: "income"});
          toast.success('Transaction added');
         };
         useEffect(() => {
          localStorage.setItem("history", JSON.stringify(history));
        }, [history]);
        const removeItem=(id)=>{
          setHistory(history.filter((item) => item.id !== id));
          toast.info('Transaction deleted');
        }
        const handleEdit=(id)=>{
          const item = history.find(entry => entry.id === id);
          if (item) {
            setData({ title: item.title, amount: Math.abs(item.amount), type: item.amount < 0 ? "expense" : "income" });
            setEditingId(id);
            toast.info('Editing mode enabled');
          }
        }
        const cancelEdit = ()=>{
          setEditingId(null);
          setData({ title: "", amount: "", type: "income"});
          toast.info('Edit cancelled');
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
                formatCurrency,
                removeItem,
                data,
                setData,
                handleEdit,
                cancelEdit,
                editingId,
            }}>
            {children}
            
        </AppContext.Provider>
            )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export default AppProvider;
