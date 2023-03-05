import logo from './logo.svg';
import './App.css';

import { store } from './redux/store';

import { Provider } from 'react-redux';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Provider store={store} >
      <AddTodo />
      <TodoList />

    </Provider>
  );
}

export default App;
