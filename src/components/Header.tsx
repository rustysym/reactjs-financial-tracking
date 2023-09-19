import { BsFillChatFill } from "react-icons/bs";
import { AiFillBell, AiFillCaretDown  } from "react-icons/ai";
import profile from "../assets/images/avatar2.jpg";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

interface Props{
    title:string
    id:number
}
const Header: React.FC<Props> = ({title,id}) => {
    console.log(id)
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(" ");
      }
  return (
    <div className="flex flex-row pl-96 pt-8 h-24 justify-between w-full">
        <input
          placeholder="Search, transactions, categories or accounts"
          className="w-[40%] h-8 rounded-xl p-6 mr-6"
        />
        {id === 2 ? (<><Menu as="div" className="relative inline-block text-left pr-6">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-2 rounded-md  px-5 py-4 h-12 text-sm font-semibold text-gray-200 shadow-sm ring-1 ring-inset ring-gray-400 hover:ring-gray-100">
            Options
            <AiFillCaretDown
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute bg-[#343434] right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-400 text-gray-900" : "text-gray-200",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-400 text-gray-900" : "text-gray-200",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Support
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-400 text-gray-900" : "text-gray-200",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    License
                  </a>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active
                          ? "bg-gray-400 text-gray-900"
                          : "text-gray-200",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <div className="flex flex-row space-x-3">
          <button className="h-12 w-32 border border-gray-400 rounded-md hover:border-[#85CB9D] hover:text-[#85CB9D] text-sm">
            Add a new Transaction
          </button>
          <button className="h-12 w-32 border border-gray-400 rounded-md hover:border-[#85CB9D] hover:text-[#85CB9D] text-sm">
            Add transaction
          </button>
        </div></>):(<></>
      )}
      <div className="flex flex-row h-12 relative right-12 space-x-8">
          <button className="h-12 w-32  bg-[#85CB9D] rounded-md text-gray-200 px-4 hover:bg-[#94f3b6]">
            {title}
          </button>
          <button>
            <BsFillChatFill size={"16"} />
          </button>
          <button>
            <AiFillBell size={"18"} />
          </button>
          <img src={profile} className="w-12 h-12 rounded-full" />
        </div>
</div>

  )
}

export default Header