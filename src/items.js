import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Income from "./income";
import Input from "./input";
import { useGlobalContext } from "./context";
import { motion} from "framer-motion";


const Items = () => {
  const { history, removeItem, date } = useGlobalContext();


  return (
    <>
      <article className='title'>
        <Income />
        <h1 className="title">Transaction History</h1>
        <div className="underline"></div>

        {history.map((item,i) => {
          const { id, title, amount } = item;

          return (
            <motion.div key={id} className={amount > 0 ? "item plus" : "item minus"}
              initial={{ y: "-300px", opacity: 0 }}
              animate={{ y: 0, opacity: 1,}}
              exit={{ y: "-300px", opacity: 0 }}
              transition={{delay:i*.25}}
          
            >
              <h3>{title}</h3>
              <h5>{amount}</h5>
              <p>{date}</p>
              <IconButton
                aria-label="delete"
                color="secondary"
                onClick={() => removeItem(id)}
              >
                <DeleteIcon className="btn" />
              </IconButton>
            </motion.div>
          );
        })}
        <Input />
      </article>
    </>
  );
};
export default Items;
