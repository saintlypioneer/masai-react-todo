import logo from './logo.svg';
import './App.css';

import { store } from './redux/store';

import { Provider } from 'react-redux';

import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

import { Routes, Route } from 'react-router-dom';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <Provider store={store} >
      <Routes>
        <Route path='/' element={
          <>
            <AddTodo />
            <TodoList />
          </>
        } />
        <Route path='/todo/:id' element={<TodoItem />} />
      </Routes>
    </Provider>
  );
}

export default App;
