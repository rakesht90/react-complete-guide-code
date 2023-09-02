import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
    setIsEditing(false);
  };
  const isEditingHandler = () => {
    setIsEditing(true);
  };
  const onCancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={isEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={onSaveExpenseHandler}
          onCancel={onCancelHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpenses;
