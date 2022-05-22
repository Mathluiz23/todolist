import { Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import TodoList from './Pages/TodoList';
import './css/App.css';

function App() {
  return (
    <div>
        <Routes>
          <Route exact path="/task" element={ <TodoList /> } />
          <Route exact path="/" element={ <Login/>} />
        </Routes>
    </div>
  );
}

export default App;
