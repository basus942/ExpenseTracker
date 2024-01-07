import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Link href="/dashboard">
        <div className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white-100  w-30 h-30 p-5 rounded-xl">
          HOME PAGE
        </div>
      </Link>
    </main>
  );
}
