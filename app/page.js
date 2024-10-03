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
            <br />
            <Link
              href="/week-5"
              className="text-lg hover:text-green-400 hover:underline"
            >
              Week-5 Assignment
            </Link>
            <br />
            <Link
              href="/week-6"
              className="text-lg hover:text-green-400 hover:underline"
            >
              Week-6 Assignment
            </Link>
            <br />
            <Link
              href="/week-7"
              className="text-lg hover:text-green-400 hover:underline"
            >
              Week-7 Assignment
            </Link>
            <br />
            <Link
              href="/week-8"
              className="text-lg hover:text-green-400 hover:underline"
            >
              Week-8 Assignment
            </Link>
            <br />
            <Link
              href="/week-9"
              className="text-lg hover:text-green-400 hover:underline"
            >
              Week-9 Assignment
            </Link>
            <br />
            <Link
              href="/week-10"
              className="text-lg hover:text-green-400 hover:underline"
            >
              Week-10 Assignment
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Page;
