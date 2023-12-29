import React from "react";
import { BudgetCard } from "../BudgetCard/BudgetCard";
import { useBudget } from "../../context/BudgetContext";

export const TotalBudgetCard = () => {
    const { budgets, expenses } = useBudget()
    const max = budgets.reduce((total, budget) => total + budget.max, 0)
    const amount = expenses.reduce((total, expense) => total + expense.amount, 0)

    if (amount === 0) return null
    return (
        <>
            <BudgetCard amount={amount} name="Total" gray max={max} hideButtons />
        </>

    )
};
