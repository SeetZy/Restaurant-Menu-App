function Footer() {
  return (
    <footer className="w-full bg-navbarfooter body-font">
      <div className="container flex flex-col flex-wrap px-5 py-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-0 md:mt-0 md:text-left">
          <div className="w-full px-4">
            <h2 className="mb-3 text-xl font-medium tracking-widest text-gray-200 uppercase title-font">
              Informācija
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-white  cursor-pointer hover:text-gray-100">
                  Par Mums
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white cursor-pointer hover:text-gray-100">
                  Kontaktinformācija
                </a>
              </li>
              <li className="mt-3">
                <a className="text-white  cursor-pointer hover:text-gray-100">
                  Bieži Uzdotie Jautājumi
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 mb-4">
            <span className="inline-flex">
              <a className="text-white  cursor-pointer hover:text-gray-100">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white  cursor-pointer hover:text-gray-100">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white  cursor-pointer hover:text-gray-100">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white  cursor-pointer hover:text-gray-100">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="container px-5 pb-2 pt-3 mx-auto">
          <p className="text-sm text-gray-200 capitalize text-center">
            © 2023 All rights reserved{' '}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
