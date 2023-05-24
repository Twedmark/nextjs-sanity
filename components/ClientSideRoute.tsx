"use client";

import Link from "next/link";

function ClientSideRoute({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return (
    <Link href={route} className="flex flex-col group cursor-pointer">
      {children}
    </Link>
  );
}

export default ClientSideRoute;
