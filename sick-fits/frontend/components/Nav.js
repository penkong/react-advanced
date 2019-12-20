import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <Link href="/sell">
        <a>sell!!!!</a>
      </Link>
      <Link href="/">
        <a>home!!!!</a>
      </Link>
    </div>
  );
};

export default Nav;
