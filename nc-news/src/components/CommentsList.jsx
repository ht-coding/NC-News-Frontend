import Comment from "./Comment";

export default function CommentsList({ comments }) {
  if (comments.length === 0)
    return "No comments have been left on this article yet.";
  return comments.map((comment) => (
    <Comment commentData={comment} key={comment.comment_id} />
  ));
}
