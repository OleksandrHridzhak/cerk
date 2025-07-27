import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-c mb-3 mt-8">404</h1>
      <p className="text-base md:text-lg mb-6 text-gray-c max-w-xs md:max-w-md">Sorry, the page you are looking for does not exist.</p>
      <Link
        href="/"
        className="text-light-c bg-gray-c rounded-full py-3 px-6 text-base md:text-lg shadow hover:underline focus:outline-none focus:ring-2 focus:ring-gray-c transition-all duration-200"
        style={{ minWidth: 120 }}
      >
        Go Home
      </Link>
    </div>
  );
}
