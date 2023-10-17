import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-400 to-purple-600">
      <div className="text-white text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="text-lg mb-4">
          Oops! The page you are looking for doesn't exist.
        </p>
        <Link href="/" className="text-blue-300 hover:text-blue-100 text-lg">
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
}
