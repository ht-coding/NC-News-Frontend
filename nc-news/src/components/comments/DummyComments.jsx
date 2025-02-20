import SingleDummyComment from "./SingleDummyComment";

export default function DummyComments() {
  return (
    <>
      <p className="sr-only">...loading</p>
      <div className="flex text-lg">
        <button className="text-primary-900 bg-primary-200 animate-pulse px-3 py-2 rounded-2xl border-0 mx-auto w-40 h-12"></button>
      </div>
      {[...Array(3).keys()].map((_, i) => {
        return <SingleDummyComment key={i} />;
      })}
    </>
  );
}
