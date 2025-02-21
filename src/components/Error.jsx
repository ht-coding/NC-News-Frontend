export default function Error({title, message}) {
  return <div className="my-auto">
    <h1 className="text-3xl text-center">{title}</h1>
    <p className="my-5 text-center">{message}</p>
  </div>
}