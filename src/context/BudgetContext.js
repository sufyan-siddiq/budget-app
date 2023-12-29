import { createContext, useContext } from "react"
import { v4 as uuidV4 } from "uuid"
import { useLocalStorage } from "../hooks/useLocalStorage"
export const BudgetContext = createContext()
export const useBudget = () => {
    return useContext(BudgetContext)
}
export const UNCATEGORIZED_BUDGET_ID = "Uncategorized"
export const BudgetProvider = ({ children }) => {
    const [budgets, setBudgets] = useLocalStorage("budgets", [])
    const [expenses, setExpenses] = useLocalStorage("expenses", [])
    const getBudgetExpenses = (budgetId) => {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
    const addExpense = ({ budgetId,
        amount,
        description }) => {
        setExpenses(prevExpenses => {
            return [...prevExpenses, {
                id: uuidV4(), budgetId, amount, description
            }]
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
  
    const deleteBudget = ({ id }) => {
        setExpenses(prevExpenses => {
            return prevExpenses.map(expense => {
              if (expense.budgetId !== id) return expense
              return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID }
            })
        })

        setBudgets(prevBudgets => {
          return prevBudgets.filter(budget => budget.id !== id)
        })
    
    }

const deleteExpense = ({ id }) => {
    setExpenses(prevExpenses  => {
        return prevExpenses.filter((expense) => expense.id !== id)
    })

}
const values = {
    budgets,
    expenses,
    deleteBudget,
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
