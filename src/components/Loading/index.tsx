export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-transparent">
      <div className="relative flex items-center">
        <div className="portal-animation w-20 h-20"></div>
      </div>
      <p className="mt-6 text-green-500 text-lg font-semibold tracking-wider rick-morty-text">
        Loading...
      </p>
    </div>
  );
}
