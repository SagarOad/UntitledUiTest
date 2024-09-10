import Image from "next/image";
import logo from "@/assets/logo.png";
import container from "@/assets/container.png";

const MainBanner = () => {
  return (
    <div>
      <div className=" main-pattern">
        <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          {/* Left section: Logo and Navigation */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Image
              src={logo}
              width={1000}
              height={1000}
              alt="Logo"
              className="w-40 h-10"
            />

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8 text-lg">
              <a href="#" className="text-gray-700 hover:text-purple-600">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Blog
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>

          {/* Right section: Log in and Sign up */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Log in
            </a>
            <a
              href="#"
              className="px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg"
            >
              Sign up
            </a>
          </div>

          {/* Mobile Menu for small screens */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </header>

        <section className="py-20">
          <div className="max-w-7xl mx-auto mt-16 px-4 text-center">
            <h1 className="lg:text-6xl text-4xl inter font-bold text-gray-900">
              Beautiful analytics to grow smarter
            </h1>
            <p className="mt-4 inter lg:text-[20px] text-[18px] font-medium lg:w-[80%] mx-auto  text-gray-600">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>
            <div className="mt-8 flex flex-col lg:flex-row justify-center space-x-4">
              <a
                href="#"
                className="px-6 py-2 text-md inter mb-4 lg:mb-0 text-[#344054] font-semibold text-black-400 border-2 border-[#D0D5DD] bg-white rounded-md"
              >
                Demo
              </a>
              <a
                href="#"
                className="px-6 py-3 text-md inter font-semibold text-white bg-primary rounded-md"
              >
                Sign up
              </a>
            </div>
          </div>

          <Image src={container} className=" mx-auto mt-12" />
        </section>
      </div>
    </div>
  );
};

export default MainBanner;
