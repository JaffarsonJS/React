import './App.css';
// import Api from './Components/Api/Api';
import Todo from './Components/TODO/Todo';
import TodoUsingUseReducer from './Components/TODO/TodoUsingUseReducer';

function App() {
  return (
    <div className="App">
     {/* <Api/> */}
     {/* <Todo/> */}
     <TodoUsingUseReducer/>
     
    </div>
  );
}

export default App;
