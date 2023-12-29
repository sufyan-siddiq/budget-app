import React, { useState } from "react";
import { BudgetCard } from "../BudgetCard/BudgetCard";
import { UNCATEGORIZED_BUDGET_ID, useBudget } from "../../context/BudgetContext";

export const UnCategorizeBudgetCard = (props) => {

    const { getBudgetExpenses } = useBudget()
    const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce((total, expense) => total + expense.amount, 0)
    if (amount === 0) return null
    return (
        <>
            <BudgetCard amount={amount} name="Uncategcorized" gray {...props} />
        </>

    )
};
