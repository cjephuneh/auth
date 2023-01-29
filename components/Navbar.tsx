import Link from "next/link";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Login",
      link: "/login",
    },
    {
      id: 3,
      name: "Sign Up",
      link: "/signup",
    },
  ];

  return (
    <>
      <header className="flex flex-wrap container mx-auto max-w-full items-center p-6 justify-between bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center text-blue-900 hover:text-blue-800 cursor-pointer transition duration-150 ">
          <Link href="/">
            <span className="font-semibold text-lg font-sans">
              Firebase Authentication with Next.js
            </span>
          </Link>
        </div>

        <nav className={`md:flex md:items-center font-title w-full md:w-auto`}>
          <ul className="text-lg inline-block">
            <>
              {menuItems.map((item) => (
                <li key={item.id} className="my-3 md:my-0 items-center mr-4 md:inline-block block ">
                  <Link href={item.link} className="text-blue-800 hover:text-blue-900 transition" legacyBehavior>
                     <a>{item.name}</a>
                  </Link>
                 
                </li>
              ))}
            </>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Navbar;