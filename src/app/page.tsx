import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome</h1>
        <Link
          href="/login"
          className="block w-48 bg-black text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-800 transition duration-200"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="block w-48 bg-black text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-800 transition duration-200"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
