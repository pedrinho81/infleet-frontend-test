export function NotFound() {
    return (
        <div className="flex animate-pulse flex-col items-center justify-center min-h-[28em] bg-black text-green-300 text-center p-4">
            <h1 className="text-4xl font-bold mb-4">404 - Portal Not Found!</h1>
            <p className="text-xl mb-4">
                Looks like you took a wrong turn in the multiverse. Try a different dimension, Morty!
            </p>
            <a
                href="/"
                className="text-green-500 underline hover:text-green-400 transition-all"
            >
                Take me back home!
            </a>
        </div>
    );
};

