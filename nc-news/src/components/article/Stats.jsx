import { useEffect, useState } from "react";
import { Vote } from "../Vote";
import { fetchComments } from "../../api";

export default function Stats({ article_id, votes, author }) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetchComments(article_id).then((response) => {
      setComments(response);
      setLoading(false);
    });
  }, []);
  if (loading) return <div className="h-10"></div>;
  return (
    <div className="mt-5 flex justify-center items-center relative">
      {comments.length} Comments
      <Vote
        id={article_id}
        votes={votes}
        voteType={"articles"}
        author={author}
      ></Vote>
    </div>
  );
}
