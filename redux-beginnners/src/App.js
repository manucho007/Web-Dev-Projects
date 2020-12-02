import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementNr } from './actions';
function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment 1+</button>
      <button onClick={() => dispatch(incrementNr(5))}>Increment 5+</button>
      <button onClick={() => dispatch(decrement())}>Decrease 1-</button>
      {isLogged ? (
        <h3>Valuable Information I should not see </h3>
      ) : (
        <h3>All is good Champ</h3>
      )}
    </div>
  );
}

export default App;
