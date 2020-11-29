import { useState } from 'react';
import './App.css';
import Header from './components/Header'
function App() {
  const [newTask, setNewTask] = useState(['Faire une To Do List']);
  const [task, setTask] = useState('');
  const [filterTask, setFilter] = useState('Search')

  return (
    <div className="App">
      <Header />
      <div id="todolist">
        <section className="tasks">
          {newTask.map((t, i) => {
            return (
              t !== 'Une autre ?' && t !== '' &&
              <div key={i} className="content-task">
                <span
                  onClick={() => {
                    const deltask = [...newTask];
                    deltask.splice(newTask.indexOf(t), 1)
                    setNewTask(deltask);
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
            setTask('');
          }
          }>
          <input value={task} type="text" className="more" placeholder="Ajouter une tâche"
            onChange={(e) => {
              setTask(e.target.value)
            }} />
          <input type="submit" className="btn-submit" value="Ajouter une tâche" />
        </form>
        <form
        onSubmit = {(e)=>{
          e.preventDefault();
        }

        }
        >
          <input
          onChange = {(e)=>{
            let filterList = e.target.value;
            setFilter(filterList)
            console.log(filterList);
          }
          }
          type="text" className="more" placeholder="Recherche" value={filterTask} />
        </form>
      </div>
    </div>
  );
}

export default App;
