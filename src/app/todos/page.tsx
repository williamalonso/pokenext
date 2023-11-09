// import React from "react";
// import styles from '../../styles/Todo.module.css';

// interface TodosProps {
//   data: any[]; // Defina o tipo de 'data' como um array de qualquer tipo
// }

// export async function getStaticProps() {
//   // Realize uma solicitação de busca de dados
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await res.json();

//   return {
//     props: {
//       data, // Os dados que você deseja passar para a página
//     },
//   };
// }

// const Todos: React.FC<TodosProps> = ( {data} ) => {
//   return (
//     <>
//       <h1>Tarefas para fazer: </h1>
//       <ul className={ styles.todolist }>
//         {
//           data.map( (item) => (
//             <li>{item.title}</li>
//           ))
//         }
//       </ul>
//     </>
//   );
// }
 
// export default Todos;