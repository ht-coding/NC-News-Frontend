export default function DummyGrid({ count }) {
  return (
    <>
      <p className="sr-only">...loading</p>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse">
        {[...Array(+count).keys()].map((_, i) => {
          return (
            <div key={i}>
              <div className="aspect-video rounded-2xl bg-primary-100"></div>
              <div className="h-6 bg-primary-100 rounded-sm mt-3"></div>
            </div>
          );
        })}
      </section>
    </>
  );
}
