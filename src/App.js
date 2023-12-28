import { Button, Container, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { BudgetCard } from './components/BudgetCard/BudgetCard';
import { AddExpenseModel } from './components/AddExpenseModel/AddExpenseModel';
import { AddBudgetModal } from './components/AddBudgetModel/AddBudgetModel';
import { useState } from 'react';
import { useBudget } from './context/BudgetContext';

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState()
  const [show, setShow] = useState(false);
  const { budgets, expenses } = useBudget()
  const handleClose = () => setShow(false);
  const openAddExpenseModal = () => { }
  return (
    <Container className='my-4'>
      <Header />
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
        // const amount = getBudgetExpenses(budget.id).reduce((total, expenses))
        // console.log(amount);
        return (
          <BudgetCard name={budget.id} amount={budget.amount} max={budget.max} gray />
        )
      }
      )}
      <AddExpenseModel show={show}
        handleClose={handleClose} />
      <AddBudgetModal show={show}
        handleClose={handleClose} />
    </Container>
  );
}

export default App;
