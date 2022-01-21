import React, { useState, useContext } from "react";
import Title from "./components/Title";
import ListTask from "./components/ListTask";
import BtnCreate from "./components/BtnCreate";
import Search from "./components/Search";
import Modal from "./components/Modal";
import { Contexto } from "./context/Context";
import { createGlobalStyle } from "styled-components";

const GStyle = createGlobalStyle`
  body{
    font-family: "sans-serif";
    color:${({ dark }) => (dark ? "white" : "rgb(0,130,150)")} ;
    background-color:${({ dark }) => (dark ? "black" : "rgb(245, 250, 250)")} ;
  }

  div{
    display: flex;
    flex-direction: column;
  }
`;

export default function App() {
  const { dark } = useContext(Contexto);

  let getLocalStarage = localStorage.getItem("version_1");
  let taskStorage;

  if (!getLocalStarage) {
    localStorage.setItem("version_1", JSON.stringify([]));
    taskStorage = [];
  } else {
    taskStorage = JSON.parse(getLocalStarage);
  }

  const [searching, setSearching] = useState("");
  const [tasks, setTasks] = useState(taskStorage);
  const [switsh, setSwitsh] = useState(false);

  let renderTasks = [];
  const finished = tasks.filter((el) => !!el.completed).length;
  const taskCount = tasks.length;

  if (searching.length < 1) {
    renderTasks = tasks;
  } else {
    renderTasks = tasks.filter((el) => {
      let lowerTask = el.task.toLowerCase();
      let lowerSearch = searching.toLowerCase();
      return lowerTask.includes(lowerSearch);
    });
  }

  const completedMark = (txt) => {
    let indexTask = tasks.findIndex((el) => el.task === txt);
    const copyTasks = [...tasks];
    copyTasks[indexTask].completed = !copyTasks[indexTask].completed;
    copyTasks[indexTask].eliminacion = `${new Date().toLocaleTimeString()} - ${new Date().toLocaleDateString()}`;
    localStorage.setItem("version_1", JSON.stringify(copyTasks));
    setTasks(copyTasks);
  };

  const removed = (txt) => {
    const confirmed = window.confirm("Seguro de eliminar esta tarea?");
    if (confirmed) {
      let indexTask = tasks.findIndex((el) => el.task === txt);
      const copyTasks = [...tasks];
      copyTasks.splice(indexTask, 1);
      localStorage.setItem("version_1", JSON.stringify(copyTasks));
      setTasks(copyTasks);
    }
  };

  return (
    <section>
      <GStyle dark={dark} />
      <Title taskCount={taskCount} finished={finished} />
      <Search tasks={tasks} searching={searching} setSearching={setSearching} />
      <ListTask
        removed={removed}
        completedMark={completedMark}
        searching={searching}
        tasks={tasks}
        renderTasks={renderTasks}
      />
      <BtnCreate setSwitsh={setSwitsh} />
      {switsh && (
        <Modal
          switch={switsh}
          setSwitsh={setSwitsh}
          setTasks={setTasks}
          tasks={tasks}
        />
      )}
    </section>
  );
}
