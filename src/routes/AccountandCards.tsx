import { BsFillChatFill } from "react-icons/bs";
import Navbar from "../components/Navbar";
import { AiFillBell } from "react-icons/ai";
import { GiProfit } from "react-icons/gi";
import { HiUsers, HiMiniWallet, HiShoppingCart } from "react-icons/hi2";
import profile from "../assets/images/avatar2.jpg";
function AccountandCards() {
  return (
    <div className="flex flex-col overflow-x-hidden overflow-y-hidden h-screen w-screen">
      <Navbar />
      <div className="flex flex-row pl-96 pt-8 h-24 justify-between w-full">
        <input
          placeholder="Search, transactions, categories or accounts"
          className="flex-shrink-0 w-[60%] h-8 rounded-xl p-6"
        />

        <div className="flex flex-row h-12 relative right-12 space-x-8">
          <button className="h-12 w-32  bg-[#85CB9D] rounded-md text-gray-200 px-4 hover:bg-[#94f3b6]">
            Add Transaction
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
      <div className="flex flex-col pl-96 mt-8">
        <h1 className="font-bold text-xl mb-8">Statements</h1>
        <div className="bg-black/20 h-56 w-[92%] p-6">
          <div className="flex flex-row">
            <span className="text-sm font-bold">Overview</span>
          </div>
          <div className="flex flex-row justify-between w-[85%] mt-8">
            <div className="flex flex-col w-8">
              <div className="flex flex-row justify-center items-center bg-purple-500 h-8 w-8">
                <GiProfit size={18} />
              </div>
              <div className="mt-6">
                <span className="text-sm">Income</span>
                <h1 className="font-bold text-2xl">489k</h1>
                <button className="border text-xs w-12 h-4">+ Add</button>
              </div>
            </div>
            <div className="flex flex-col w-8">
              <div className="flex flex-row justify-center items-center bg-purple-500 h-8 w-8">
                <HiShoppingCart size={18} />
              </div>
              <div className="mt-6">
                <span className="text-sm">Purchases</span>
                <h1 className="font-bold text-2xl">16k</h1>
                <button className="border text-xs w-12 h-4">+ Add</button>
              </div>
            </div>
            <div className="flex flex-col w-8">
              <div className="flex flex-row justify-center items-center bg-purple-500 h-8 w-8">
                <HiMiniWallet size={18} />
              </div>
              <div className="mt-6">
                <span className="text-sm">Balance</span>
                <h1 className="font-bold text-2xl">349k</h1>
                <button className="border text-xs w-12 h-4">+ Add</button>
              </div>
            </div>
            <div className="flex flex-col w-8">
              <div className="flex flex-row justify-center items-center bg-purple-500 h-8 w-8">
                <HiUsers size={18} />
              </div>
              <div className="mt-6">
                <span className="text-sm">Users</span>
                <h1 className="font-bold text-2xl">79k</h1>
                <button className="border text-xs w-12 h-4">+ Add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-black/20 h-96 w-[92%] mt-12 p-6">
          <div className="flex flex-row justify-between">
            <h1 className="text-sm font-bold">Transaction</h1>
            <button className="border text-sm px-2">Download CSV</button>
          </div>
          <div className="flex flex-row justify-between mt-6 mr-4">
            <span className="text-xs mr-16">Date</span>
            <span className="text-xs">Type</span>
            <span className="text-xs">Details</span>
            <span className="text-xs">Price</span>
            <span className="text-xs ">Amount</span>
          </div>
          <div className="flex flex-row justify-between mr-6 mt-6">
            <div className="flex flex-col space-y-4">
              <span>13 Mar 2023</span>
              <span>13 Mar 2023</span>
              <span>13 Mar 2023</span>
              <span>13 Mar 2023</span>
              <span>13 Mar 2023</span>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="bg-purple-500 w-12 h-6 text-center text-xs font-bold p-1 rounded-sm">
                Label
              </span>
              <span className="bg-purple-500 w-12 h-6 text-center text-xs font-bold p-1 rounded-sm">
                Label
              </span>
              <span className="bg-purple-500 w-12 h-6 text-center text-xs font-bold p-1 rounded-sm">
                Label
              </span>
              <span className="bg-purple-500 w-12 h-6 text-center text-xs font-bold p-1 rounded-sm">
                Label
              </span>
              <span className="bg-purple-500 w-12 h-6 text-center text-xs font-bold p-1 rounded-sm">
                Label
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col">
                <span className="text-[0.7rem] font-medium">Product-3600</span>
                <span className=" text-[0.6rem]">ID: 1943083</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.7rem] font-medium">Product-3600</span>
                <span className=" text-[0.6rem]">ID: 1943083</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.7rem] font-medium">Product-3600</span>
                <span className=" text-[0.6rem]">ID: 1943083</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[0.7rem] font-medium">Product-3600</span>
                <span className=" text-[0.6rem]">ID: 1943083</span>
              </div>
              <div className="flex flex-col">
              <span className="text-[0.7rem] font-medium">Product-3600</span>
              <span className=" text-[0.6rem]">ID: 1943083</span>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <span className="text-xs">1348$</span>
              <span className="text-xs">1348$</span>
              <span className="text-xs">1348$</span>
              <span className="text-xs">1348$</span>
              <span className="text-xs">1348$</span>
            </div>
            <div className="flex flex-col space-y-6">
              <span className="text-xs">+42%</span>
              <span className="text-xs">+42%</span>
              <span className="text-xs">+42%</span>
              <span className="text-xs">+42%</span>
              <span className="text-xs">+42%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountandCards;
