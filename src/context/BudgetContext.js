import { createContext, useContext } from "react"
import { v4 as uuidV4 } from "uuid"
import { useLocalStorage } from "../hooks/useLocalStorage"
export const BudgetContext = createContext()
export const useBudget = () => {
    return useContext(BudgetContext)
}
// {
//     id:"",
//     name:"",
//     max:""
// }
// {
//     id:"",
//     budgetId:"",
//     amount:"",
// description
// }
export const BudgetProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [expenses, setExpenses] = useLocalStorage("expenses", [])
    const getBudgetExpenses = () => {

    }
    const addExpense = ({ budgetId,
        amount,
        description }) => {
        setExpenses(expenses => {
            if ({
                ...expenses, id: uuidV4(), budgetId,
                amount, description
            }) {

            }
        })
    }

    const addBudgets = ({ name, max }) => {
        setBudgets(
            (prevBudgets) => {
                if (prevBudgets?.find(budget => budget?.name === name)) {
                    return prevBudgets
                }
                return [...budgets, { id: uuidV4(), name, max }]
            }
        )
    }
    const deletebudget = ({ id }) => {
        setBudgets(() => {
            return budgets.filter((budget) => budget.id !== id)
        })

    }
    const deleteExpense = ({ id }) => {
        setExpenses(() => {
            return expenses.filter((expense) => expense.id !== id)
        })

    }
    const values = {
        budgets,
        expenses,
        deletebudget,
        deleteExpense,
        addExpense,
        addBudgets,
        getBudgetExpenses,
    }
    return (
        <BudgetContext.Provider value={values}>
            {children}
        </BudgetContext.Provider>
    )
}
