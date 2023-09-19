import Navbar from "../components/Navbar";
import { AiFillEuroCircle } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import profile from "../assets/images/avatar2.jpg";
import Header from "../components/Header";

function Transactions() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <Header title="Create" id={2}/>
      <div className="flex flex-col pl-96">
        <div className="flex justify-between">
          <div>
            <h1 className="text-4xl font-medium mt-12">Your Transactions</h1>
          </div>
          <div className="flex space-x-2 mr-32 self-center bg-[#232323] h-12 w-54 items-center rounded-md px-2">
            <button className="bg-gray-700 h-10 rounded-sm p-2 text-center">
              Most Popular
            </button>
            <button className="h-10 rounded-sm p-2 text-center">
              Higher Priced
            </button>
          </div>
        </div>
        <div className="flex space-x-8 mt-8 mr-12">
          <div className="flex bg-[#363636] w-full h-32 items-center">
            <div className="flex items-start content-center ml-6">
              <BsFillCreditCard2BackFill
                size={32}
                className="border p-4 h-20 w-20"
              />
              <div className="ml-4 self-center">
                <span className="font-regular">Your Income</span>
                <h1 className="font-medium text-3xl">$9.876,33</h1>
              </div>
            </div>
          </div>
          <div className="flex bg-[#363636] w-1/3 h-32 items-center justify-center">
            <div className="flex flex-col items-center ">
              <AiFillEuroCircle size={32} />
              <span className="font-regular">Total Transactions</span>
              <h1 className="font-medium text-3xl">$20.850</h1>
            </div>
          </div>
          <div className="flex bg-[#363636] w-1/3 h-32 items-center justify-center">
            <div className="flex flex-col items-center ">
              <GrTransaction size={30} className="bg-white rounded-full p-2" />
              <span className="font-regular">Total Transactions</span>
              <h1 className="font-medium text-3xl">$20.850</h1>
            </div>
          </div>
        </div>
        <div className="bg-[#363636] w-[97%] h-auto mt-12">
          <div className="flex flex-row h-24 justify-around items-end underline text-md text-gray-200 pb-4">
            <span className="mr-72">Product</span>
            <span>Status</span>
            <span>Price</span>
            <span>Quantity sold</span>
            <span>Total Income</span>
            <span>Total</span>
          </div>
          <div className="flex flex-row mx-6 justify-around items-center mb-4">
            <img src={profile} className="h-16 w-16 mr-2" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Product-3815</span>
              <span className="text-xs">View product details</span>
            </div>
            <span className="border rounded-md text-sm font-medium p-1 h-7">
              Active
            </span>
            <span>6.756€</span>
            <span>4,128</span>
            <span>48.358€</span>
            <span>67.513€</span>
          </div>
          <div className="flex flex-row mx-6 justify-around items-center mb-4">
            <img src={profile} className="h-16 w-16 mr-2" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Product-3815</span>
              <span className="text-xs">View product details</span>
            </div>
            <span className="border rounded-md text-sm font-medium p-1 h-7">
              Active
            </span>
            <span>6.756€</span>
            <span>4,128</span>
            <span>48.358€</span>
            <span>67.513€</span>
          </div>
          <div className="flex flex-row mx-6 justify-around items-center mb-4">
            <img src={profile} className="h-16 w-16 mr-2" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Product-3815</span>
              <span className="text-xs">View product details</span>
            </div>
            <span className="border rounded-md text-sm font-medium p-1 h-7">
              Active
            </span>
            <span>6.756€</span>
            <span>4,128</span>
            <span>48.358€</span>
            <span>67.513€</span>
          </div>
          <div className="flex flex-row mx-6 justify-around items-center mb-4">
            <img src={profile} className="h-16 w-16 mr-2" />
            <div className="flex flex-col">
              <span className="text-sm font-bold">Product-3815</span>
              <span className="text-xs">View product details</span>
            </div>
            <span className="border rounded-md text-sm font-medium p-1 h-7">
              Active
            </span>
            <span>6.756€</span>
            <span>4,128</span>
            <span>48.358€</span>
            <span>67.513€</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
