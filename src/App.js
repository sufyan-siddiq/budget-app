import { Container, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { BudgetCard } from './components/BudgetCard/BudgetCard';


function App() {
  return (
    <Container className='my-4'>
      <Header />
      <BudgetCard name={"Entertainment"} amount={200} max={1000} gray />
    </Container>
  );
}

export default App;
