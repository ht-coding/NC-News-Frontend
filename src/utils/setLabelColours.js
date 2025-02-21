export default function setLabelColours(articles) {
  articles.forEach((article) => {
    // bg-neutral-200 text-neutral-900 border-neutral-500
    let colour = "neutral";
    if (article.topic === "coding") {
      // bg-blue-200 text-blue-900 border-blue-500
      colour = "blue";
    } else if (article.topic === "football") {
      // bg-fuchsia-200 text-fuchsia-900 border-fuchsia-500
      colour = "fuchsia";
    } else if (article.topic === "cooking") {
      // bg-yellow-200 text-yellow-900  border-yellow-500
      colour = "yellow";
    }
    article.colour = colour;
  });
}
