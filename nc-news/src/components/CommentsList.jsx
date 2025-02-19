import { useEffect, useState } from "react";
import { fetchComments } from "../api";
import Comment from "./Comment";

export default function CommentsList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchComments(article_id).then((response) => {
      setComments(response);
      setLoading(false);
    });
  }, []);
  if (loading) return "loading...";
  if (comments.length === 0)
    return "No comments have been left on this article yet.";
  return comments.map((comment) => <Comment commentData={comment} />);
}
