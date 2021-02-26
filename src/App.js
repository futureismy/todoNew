import './App.css';
import TextField from "@material-ui/core/TextField"
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { db } from './firebase_config';
import firebase from 'firebase'
import TodolistItem from './Todo';
function App() {
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState('');
  useEffect(() => {
    getTodos()
  }, []) //blank to run only firsh launch
  function getTodos() {
    db.collection('todos').onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress
        })
        )
      )
    })
  }

  function addTodo(e) {
    e.preventDefault()
    db.collection('todos').add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput
    })

  }

  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: "center",
      flexDirection: 'column',
      alignItems: 'center',
      width:"100%"
    }}>
      <div
      >
        <h2>😝 Todos App 😂</h2>
        <form>
          <TextField id='standard-basic'
            label='Write a Todo'
            value={todoInput}
            onChange={(e) =>
              setTodoInput(e.target.value)
            }
            style={{ maxWidth: '500px', width: '90vw' ,marginTop:'24px'}} />
          <Button variant="contained" type='submit' onClick={addTodo} style={{ display:'none' }}>Add Todo</Button>
        </form>
         {todos.map((todo,index) => {
        return   <TodolistItem key ={index}
        todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
        })}
      </div>
    </div>
  );
}

export default App;
