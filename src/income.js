import React from "react";
import { useGlobalContext } from "./context";

const Income = () => {
  const { total, income, expense } = useGlobalContext();

  return (
    <div className="stat-grid">
      <div className="stat-card stat-card--balance">
        <p className="eyebrow">Current balance</p>
        <h2 className="stat-value">${total}</h2>
        <p className="muted">Updated in real time</p>
      </div>
      <div className="stat-card stat-card--income">
        <p className="eyebrow">Total income</p>
        <h2 className="stat-value">${income}</h2>
        <p className="muted">What you have added</p>
      </div>
      <div className="stat-card stat-card--expense">
        <p className="eyebrow">Total expense</p>
        <h2 className="stat-value">${expense}</h2>
        <p className="muted">Includes all negative entries</p>
      </div>
    </div>
  );
};

export default Income;
