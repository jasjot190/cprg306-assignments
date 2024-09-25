import Link from "next/link";

function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="px-6">
        <h1 className="text-4xl font-bold mb-5">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <ul>
          <li>
            <Link
              href="/week-2"
              className="text-lg hover:text-green-400 hover:underline"
            >
              Week-2 Assignment
            </Link>
            <br />
            <Link
              href="/week-3"
              className="text-lg hover:text-green-400 hover:underline"
            >
              Week-3 Assignment
            </Link>
            <br />
            <Link
              href="/week-4"
              className="text-lg hover:text-green-400 hover:underline"
            >
              Week-4 Assignment
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Page;
