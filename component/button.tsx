// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>

      <Link
        href="/about"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        About Page
      </Link>
    </div>
  );
}
