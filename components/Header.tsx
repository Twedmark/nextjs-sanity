import Image from "next/image";
import Link from "next/link";

import type { Header } from "@/typings";

type Props = {
  data: Header;
};

const Header = ({ data }: Props) => {
  //// TODO
  // 1. Add a link to the Tech Vantage logo that takes the user to the home page
  // 2. Add the ability to change logo on Sanity
  // 3. make a query to sanity for all the pages? if that's possible

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <Image
          src="/techVantage.svg"
          alt="Tech Vantage Logo"
          width={50}
          height={12}
          priority
        />
        <h1 className="text-2xl font-bold justify-self-start ">
          {data.companyName}
        </h1>
        <nav className="flex items-center justify-between w-1/4">
          <Link href="/">Home</Link>
          <Link href="/news">News</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
      <hr className="border-[ bg-blue-300] mb-10"></hr>
    </>
  );
};

export default Header;
