import { GetStaticPropsContext } from "next";
import Link from "next/link";

interface dataProps {
  data: {
    id: number,
    title: string,
  }
}

interface Todo {
    id: number,
    title: string,
}

// Aqui eu pego todos os dados para saber o que tem disponível
export async function getStaticPaths() {

  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data: Todo[] = await response.json();

  // retornado todos os paths disponiveis
  const paths = data.map( (todo) => ({
    params: {
      todoid: String(todo.id)
    }
  }) );

  return {
    paths,
    fallback: false, // ou 'blocking' se quiser gerar a página no momento da solicitação
  };
}

// Aqui vamos usar os dados disponíveis acima
export async function getStaticProps(context: GetStaticPropsContext) {

  const { params } = context;

  if(!params || !params.todoid) {
    throw new Error('Parâmetro todoid não encontrado na URL');
  }

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoid}`);
  const data = await res.json();

  return {
    props: { 
      data, 
    }
  }

}

const todoId: React.FC<dataProps> = ({ data }) => {

  return (
    <>
      <Link href="/todo">Voltar</Link>
      <p>detalhes do item {data.id}</p>
      <p>Comentário 1 do item {data.id} de nome {data.title}<Link href={`/todo/${data.id}/comentario/1`}>Detalhes...</Link></p>
      <p>Comentário 2 do item {data.id} <Link href={`/todo/${data.id}/comentario/2`}>Detalhes...</Link></p>
      <p>Comentário 3 do item {data.id} <Link href={`/todo/${data.id}/comentario/3`}>Detalhes...</Link></p>
    </>
  );
}
 
export default todoId;