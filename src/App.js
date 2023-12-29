import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Stack } from 'react-bootstrap';
import { BudgetCard } from './components/BudgetCard/BudgetCard';
import { AddExpenseModel } from './components/AddExpenseModel/AddExpenseModel';
import { AddBudgetModal } from './components/AddBudgetModel/AddBudgetModel';
import { UNCATEGORIZED_BUDGET_ID, useBudget } from './context/BudgetContext';
import { TotalBudgetCard } from './components/TotalBudgetCard/TotalBudgetCard';
import { UnCategorizeBudgetCard } from './components/UnCategorizeBudgetCard/UnCategorizeBudgetCard';
import { ViewExpencesModal } from './components/ViewExpencesModal/ViewExpencesModal';

function App() {
  const [show, setShow] = useState(false);
  const [expenseModal, setExpenseModal] = useState(false);
  const [viewExpenseModal, setViewExpenseModal] = useState();
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState()
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState(false);
  const { budgets, getBudgetExpenses } = useBudget()
  const handleClose = () => setShow(false);
  const handleClose2 = () => setExpenseModal(false);

  const openAddExpenseModal = (budgetId) => {
    setExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }
  return (
    <Container className='my-4'>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary" onClick={() => setShow(true)}>
          Add Budget
        </Button>
        <Button variant="outline-primary" onClick={openAddExpenseModal}>
          Add Expense
        </Button>
      </Stack>
      {budgets.map((budget) => {
        const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
        return (
          <BudgetCard
            key={budget.id}
            name={budget.name}
            amount={amount}
            max={budget.max}
            gray
            onViewExpensesClick={() =>
              setViewExpensesModalBudgetId(budget.id)
            }
            onAddExpenseClick={() => openAddExpenseModal(budget.id)}
          />
        )
      }
      )}
      <UnCategorizeBudgetCard
        onAddExpenseClick={() => openAddExpenseModal}
        onViewExpensesClick={() => setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)} />
      <TotalBudgetCard />
      <AddExpenseModel show={expenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={handleClose2} />
      <AddBudgetModal show={show}
        handleClose={handleClose} />
      <ViewExpencesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpenseModal()} />
    </Container>
  );
}

export default App;
