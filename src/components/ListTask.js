import React from "react";
import styled from "styled-components";
import Task from "./Task";

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: inherit;

  ul {
    width: 75%;
    padding: 0;
  }
`;

export default function ListTask({
  renderTasks,
  completedMark,
  removed,
  tasks,
  searching,
}) {
  
  return (
    <Section>
      <ul>
        {renderTasks.length && tasks.length ? (
          renderTasks.map((el) => (
            <Task
              key={el.task + Math.random()}
              completedMark={completedMark}
              text={el.task}
              isOk={el.completed}
              removed={removed}
              fecha={el.fecha}
              eliminacion={el.eliminacion}
            />
          ))
        ) : (
          <p>{searching ? `No hay coincidencias con: ${searching}` : `Sin tareas` }</p>
        )}
      </ul>
    </Section>
  );
}
