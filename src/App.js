import { Route, Routes} from 'react-router-dom';
import TodoList from './Pages/TodoList';
import './css/App.css';

function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={ <TodoList /> } />s
        </Routes>
    </div>
  );
}

export default App;
