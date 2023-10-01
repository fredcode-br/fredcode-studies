import { useState } from 'react';

import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss'
import Stopwatch from '../components/Stopwatch';
import Itask from '../Types/task';

function App() {
  const [tasks, setTasks] = useState<Itask[]>([]);
  const [selected, setSelected] = useState<Itask>();

  function selectTask(selected: Itask) {
    setSelected(selected);
    setTasks(lastTasks => lastTasks.map(task => ({
      ...task,
      selected: task.id === selected.id ? true : false
    })))
  }

  function finishTask(){
    if(selected) {
      setTasks(lastTasks => 
        lastTasks.map(task => {
          if(task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true
            }
          }
          return task
        }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
      tasks={tasks} 
      selectTask={selectTask}/>
      <Stopwatch selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
