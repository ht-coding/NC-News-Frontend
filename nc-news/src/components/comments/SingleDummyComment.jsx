export default function SingleDummyComment() {
  return (
    <article className="my-8 animate-pulse">
      <header className="flex gap-2 items-center">
        <div className="block aspect-square rounded-full overflow-clip h-15 bg-primary-100 border-3 border-primary-200"></div>
        <div>
          <div className="h-4 w-50 bg-primary-100 rounded-sm"></div>
          <div className="h-2 w-25 bg-primary-100 rounded-sm mt-2"></div>
        </div>
      </header>
      <div className="space-y-3 mt-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 h-2 rounded bg-primary-100"></div>
          <div className="col-span-1 h-2 rounded bg-primary-100"></div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 h-2 rounded bg-primary-100"></div>
          <div className="col-span-2 h-2 rounded bg-primary-100"></div>
          <div className="col-span-1 h-2 rounded bg-primary-100"></div>
        </div>
        <div className="h-2 rounded bg-primary-100"></div>
      </div>
    </article>
  );
}
