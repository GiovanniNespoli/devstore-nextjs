import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-5 ring-zinc-700"></form>
      </div>
      <div className="flex items-center gap-4"></div>
    </div>
  );
}
