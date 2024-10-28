import Logo from '../../assets/3d.png'
import Gear from '../../assets/gear.png'
import Code from '../../assets/3d (2).png'
import Design from '../../assets/graphic-designer.png'
import Robot from '../../assets/robot.png'
import MultiFilters from "./MultiFilters"

const Container = () => {
  return (
    <div>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col justify-between border-e bg-white">
            <div>
              <div className="inline-flex size-16 items-center justify-center mt-5">
                <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                  <img src={Logo} alt="logo" />
                </span>
              </div>

              <div className="border-t border-gray-100">
                <div className="px-2">
                  <div className="py-4">
                    <a
                      href="#"
                      className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5"
                    >
                      <img src={Gear} alt="gear" className="w-15"/>

                      <span
                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                      >
                        General
                      </span>
                    </a>
                  </div>

                  <ul className="space-y-1 border-t border-gray-100 pt-4">
                    <li>
                      <a
                        href="#"
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                       <img src={Code} alt="code" className="w-15"/>

                        <span
                          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                        >
                          Codes
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                        <img src={Design} alt="design" className="w-15"/>

                        <span
                          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                        >
                          Colours
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                       <img src={Robot} alt="robot" className="w-15" />

                        <span
                          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                        >
                          Icons
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      >
                       {/* <img src={Link} alt="link" /> */}

                        <span
                          className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                        >
                          Account
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <form action="#">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                Logout
              </span>
            </button>
          </form>
        </div>
        </div>
        {/* Main content */}
        <div className="flex-1 p-5 ml-12">
            <MultiFilters />
          
        </div>
      </div>
    </div>
  )
}

export default Container
