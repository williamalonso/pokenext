import Link from "next/link";
import { useRouter } from "next/router";

const commentId = () => {

  const router = useRouter();
  const todoid = router.query.todoid;
  const commentid = router.query.commentid;

  return(
    <>
      <Link href={`/todo/${todoid}`}>Voltar</Link>
      <p>Este é o comentário {commentid} do item {todoid}</p>
    </>
  )
}

export default commentId;