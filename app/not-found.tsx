import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-bodytext">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-bodytext">
        Page Not Found
      </h2>
      <p className="mt-2 text-bodytext">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-white font-medium hover:bg-hover transition"
        href="/"
      >
        Go back home
      </Link>
    </div>
  );
}
