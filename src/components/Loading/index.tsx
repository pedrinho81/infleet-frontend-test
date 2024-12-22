export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] bg-transparent">
      <div className="relative flex items-center space-x-4">
        <div className="relative w-2 h-16 bg-sithRed rounded animate-pulse">
          <div className="absolute inset-0 h-full w-full blur-lg bg-sithRed opacity-50"></div>
        </div>
        <div className="relative w-2 h-16 bg-jediBlue rounded animate-pulse delay-200">
          <div className="absolute inset-0 h-full w-full blur-lg bg-jediBlue opacity-50"></div>
        </div>
        <div className="relative w-2 h-16 bg-lightsaberGreen rounded animate-pulse delay-400">
          <div className="absolute inset-0 h-full w-full blur-lg bg-lightsaberGreen opacity-50"></div>
        </div>
      </div>
      <p className="mt-6 text-droidGold text-lg font-semibold tracking-wider star-wars-text">
        Loading...
      </p>
    </div>
  );
}
