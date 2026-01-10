import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import HistoryIcon from "@material-ui/icons/History";
import PostAddIcon from "@material-ui/icons/PostAdd";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Input from "./input";
import { useGlobalContext } from "./context";
import { motion} from "framer-motion";


const Items = () => {
  const { history, removeItem, date, handleEdit, formatCurrency } = useGlobalContext();


  return (
    <section className="dashboard">
      <div className="panel panel-highlight">
        <div className="panel-heading">
          <p className="eyebrow">
            <PostAddIcon className="eyebrow__icon" />
            Quick add
          </p>
          <h2>New transaction</h2>
          <p className="muted">Use negative amounts for expenses, positive for income.</p>
        </div>
        <Input />
      </div>

      <div className="panel panel-history">
        <div className="panel-heading">
          <h2>Transaction history</h2>
          <p className="eyebrow">
            <HistoryIcon className="eyebrow__icon" />
            Recent activity
          </p>
          <p className="muted">Everything you have logged, grouped by day.</p>
        </div>
        <div className="history-list">
          {history.map((item, i) => {
            const { id, title, amount } = item;

            return (
              <motion.div
                key={id}
                className={
                  amount > 0 ? "transaction-card is-income" : "transaction-card is-expense"
                }
                initial={{ y: "-300px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-300px", opacity: 0 }}
                transition={{ delay: i * 0.15 }}
              >
                <div>
                  <p className="transaction-meta">{date}</p>
                  <h3 className="transaction-title">{title}</h3>
                </div>
                <div className="amount-chip">
                  {amount > 0 ? (
                    <TrendingUpIcon className="chip-icon" />
                  ) : (
                    <TrendingDownIcon className="chip-icon" />
                  )}
                  {formatCurrency(amount)}
                </div>
                <div className="action-group">
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleEdit(id)}
                    className="edit-btn"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="secondary"
                    onClick={() => removeItem(id)}
                    className="delete-btn"
                  >
                    <DeleteIcon className="btn" />
                  </IconButton>
                </div>
              </motion.div>
            );
          })}
          {history.length === 0 && (
            <div className="empty-state">
              <p className="eyebrow">No transactions yet</p>
              <h3>Add your first income or expense to start the journey.</h3>
              <p className="muted">Need ideas? Log your latest paycheck and a small bill.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default Items;
