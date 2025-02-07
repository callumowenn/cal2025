import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function AnimatedHome() {
  return (
    <ViewTransition>
      <Link
        href="/"
        className="flex mt-12 -mb-8 font-medium text-gray-400 dark:text-zinc-400"
      >
        Home
      </Link>
    </ViewTransition>
  );
}
