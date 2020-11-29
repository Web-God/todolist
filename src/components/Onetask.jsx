import { useState } from 'react';
const Onetask = ()=>{
  const [newTask, setNewTask] = useState(['Faire une To Do List']);
  const [task, setTask] = useState('');
  return(
    <section className="tasks">

          {newTask.map((t, i) => {
            return (
              t !== 'Une autre ?' && t !== '' &&
              <div key={i} className="content-task">
                <span

                  className="delete">&nbsp;X&nbsp;</span>
                <div className='task'>{t}</div>
              </div>
            )
          })
          }
        </section>
  )
}
export default Onetask
