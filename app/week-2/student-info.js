import Link from "next/link";

export function StudentInfo() {
  return (
    <div>
      <h1>Name : Jasjot Singh</h1>
      <p>
        Link to Github Repo :{" "}
        <Link href="https://github.com/jasjot190/cprg306_assignments">
          LINK
        </Link>
      </p>
    </div>
  );
}
