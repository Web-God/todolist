import { useState } from 'react';
import './App.css';
import Header from './components/Header'
function App() {
  const [newTask, setNewTask] = useState(['Faire une To Do List']);
  const [task, setTask] = useState('');


  return (
    <div className="App">

      <Header />
      {/* deleteMe={() => {
        const temp = [...todo];
        temp.splice(todo.indexOf(element), 1);
        setTodo(temp);
      }} */}

      <div id="todolist">
        <section className="tasks">

          {newTask.map((t, i) => {
            return (
              t !== 'Une autre ?' && t !== '' &&
              <div key={i} className="content-task">
                <span
                  onClick = {()=>{
                    const deltask = [...newTask];
                    deltask.splice(newTask.indexOf(t), 1)
                    console.log('Hello');

                  }}
                  className="delete">&nbsp;X&nbsp;</span>
                <div className='task'>{t}</div>
              </div>
            )
          })
          }
        </section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const copyNewTask = [...newTask];
            copyNewTask.push(task);
            setNewTask(copyNewTask);
            setTask('Une autre ?');
          }
          }>

          <input value={task} type="text" className="more" placeholder="Ajouter une tâche"
            onChange={(e) => {
              setTask(e.target.value)
            }} />
          <input type="submit" className="btn-submit" value="Ajouter une tâche" />
        </form>

      </div>
    </div>
  );
}

export default App;
