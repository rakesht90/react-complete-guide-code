import React from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [enteredYaer, setEnteredYear] = useState("2020");

  const filterChangeHandler = (selectedDate) => {
    setEnteredYear(selectedDate);
  };
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYaer;
  });
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYaer}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpenseList items={filterExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
