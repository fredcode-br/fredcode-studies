import { useState } from 'react';

import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss'
import Stopwatch from '../components/Stopwatch';
import Itask from '../Types/task';

function App() {
  const [tasks, setTasks] = useState<Itask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Stopwatch />
    </div>
  );
}

export default App;
