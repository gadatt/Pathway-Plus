const navbar: React.FC = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="flex justify-around items-center">
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            LOGO
          </span>
        </a>

        {/* <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button> */}

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md">
            <li>
              <a href="/" className="nav-items" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-black rounded hover:text-orange-500 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto"
              >
                Services{" "}
                <svg
                  className="ml-1 w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow"
                style={{
                  position: "absolute",
                  inset: "0px auto auto 0px",
                  margin: "0px",
                  transform: "translate3d(0px, 10.2px, 0px)",
                }}
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="bottom"
              >
                <ul
                  className="py-1 text-sm text-gray-700"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="/consulting" className="dropdown-items">
                      Consultation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-items">
                      Proofreading
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-items">
                      Events
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" className="nav-items">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="nav-items">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="nav-items">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="nav-items">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            ICON
          </span>
        </a>
      </div>
    </nav>
  );
};

export default navbar;