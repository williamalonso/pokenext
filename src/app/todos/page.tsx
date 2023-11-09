import React from "react";
import styles from '../../styles/Todo.module.css';

interface todoProps {
  id: number;
  title: string;
}

export default async function Todos() {
  
  const rest = await fetch('http://localhost:3000/api');
  const data = await rest.json();
  console.log(rest);
  return (
    <>
      <h1>Tarefas para fazer: </h1>
      <ul className={ styles.todolist }>
        {
          data.map( (item: todoProps) => (
            <div key={item.id}>
              <span>Item {item.id}:</span> 
              <li>{item.title}</li>
            </div>
          ))
        }
      </ul>
    </>
  );
}