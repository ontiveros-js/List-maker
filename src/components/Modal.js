import React, { useState, useContext } from "react";
import { Contexto } from "../context/Context";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 990;

  section {
    background-color: #d0ece7;
    border-radius: 14px;
    padding-left: 3px;
  }

  textarea {
    border: 1px solid rgb(0, 200, 200);
    background-color: ${({ dark }) => dark && "rgb(0,130,228)"};
    outline: none;
    border-radius: 8px;
    padding: 15px;
    margin: 15px;
    resize: none;
  }

  input {
    border-radius: 15px;
    margin: 10px 40px;
    border: none;
    background-color: #d0ece7;
    padding: 3px;
  }
`;

const Modal = ({ setSwitsh, setTasks, tasks }) => {
  const { dark } = useContext(Contexto);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputObject = {
      task: input,
      completed: false,
      fecha: `${new Date().toLocaleTimeString()} - ${new Date().toLocaleDateString()}`,
      eliminacion: "",
    };

    let copyTasks = [...tasks, inputObject];
    localStorage.setItem("version_1", JSON.stringify(copyTasks));
    setTasks(copyTasks);
    setSwitsh(false);
  };

  return (
    <Div dark={dark}>
      <form onSubmit={handleSubmit}>
        <section>
          <textarea
            required
            autoFocus
            onChange={handleChange}
            placeholder="Que tarea quieres apuntar"
            rows="7"
            cols="30"
          />
        </section>
        <input type="submit" value="   Crear   " />
        <input
          type="reset"
          value="  Cancelar  "
          onClick={() => setSwitsh(false)}
        />
      </form>
    </Div>
  );
};

export default Modal;
