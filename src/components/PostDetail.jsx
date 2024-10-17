import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../api";
import "./PostDetail.css";
export function PostDetail({ post, deleteMutation }) {
  // replace with useQuery
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () => fetchComments(post.id),
  });

  console.log(data);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Oops, something went wrong {error.toString()}</h3>;
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <>
        <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        {deleteMutation.isPending && <p className="loading">deleting post</p>}
        {deleteMutation.isError && (
          <p className="error">
            error deleting post: {deleteMutation.error.toString()}
          </p>
        )}
        {deleteMutation.isSuccess && (
          <p className="success"> post was (not) deleted</p>
        )}
      </>
      <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
