import { BookOpen } from "lucide-react";
import Link from "next/link";

function Logo({ textDark = true }: { textDark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex size-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
        <BookOpen className="size-5" />
      </span>
      <span
        className={`text-lg font-extrabold tracking-tight ${textDark ? "text-gray-900 dark:text-white" : "text-white"} sm:text-xl`}
      >
        GET{" "}
        <span
          className={`text-2xl ${textDark ? "text-indigo-600 dark:text-indigo-400" : "text-indigo-500"} sm:text-3xl`}
        >
          7
        </span>{" "}
        WITH MAHA
      </span>
    </Link>
  );
}

export default Logo;