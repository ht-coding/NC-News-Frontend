export default function DummyComments() {
  return (
    <>
      <p className="sr-only">...loading</p>
      <div class="flex text-lg">
        <button class="text-primary-900 bg-primary-200 animate-pulse px-3 py-2 rounded-2xl border-0 mx-auto w-40 h-12"></button>
      </div>
      {[...Array(3).keys()].map((_, i) => {
        return (
          <article className="my-8 animate-pulse" key={i}>
            <header className="flex gap-2 items-center">
              <div className="block aspect-square rounded-full overflow-clip h-15 bg-primary-100 border-3 border-primary-200"></div>
              <div>
                <div className="h-4 w-50 bg-primary-100 rounded-sm"></div>
                <div className="h-2 w-25 bg-primary-100 rounded-sm mt-2"></div>
              </div>
            </header>
            <div class="space-y-3 mt-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-primary-100"></div>
                <div class="col-span-1 h-2 rounded bg-primary-100"></div>
              </div>
              <div class="grid grid-cols-4 gap-4">
                <div class="col-span-1 h-2 rounded bg-primary-100"></div>
                <div class="col-span-2 h-2 rounded bg-primary-100"></div>
                <div class="col-span-1 h-2 rounded bg-primary-100"></div>
              </div>
              <div class="h-2 rounded bg-primary-100"></div>
            </div>
          </article>
        );
      })}
    </>
  );
}
