import { BsArrowBarLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-[#232323] h-[100vh] w-[10vh] pl-8 fixed z-30 sm:w-[35vh]">
    <div className="flex flex-row justify-between">
    <h1 className="font-inter font-semibold pt-12 pb-12 text-xl">
      FTRACK
    </h1>
    <button className="mr-8"><BsArrowBarLeft size={20}/></button>
    </div>
    <div className="flex flex-col w-full h-full gap-4">
      <button className="bg-transparent text-start font-extralight ml-3 transition hover:translate-x-2" onClick={()=> navigate("/dashboard")}>
        <div className="w-full h-8 bg-iconbars bg-no-repeat pl-10">
          <h1 className="hidden sm:block">Dashboard</h1>
        </div>
      </button>
      <button className="bg-transparent text-start font-extralight ml-3 transition hover:translate-x-2" onClick={()=> navigate("/transactions")}>
        <div className="w-full h-8 bg-icondiagram bg-no-repeat pl-10">
          <h1 className="hidden sm:block">Transactions</h1>
        </div>
      </button>
      <button className="bg-transparent text-start font-extralight ml-3 transition hover:translate-x-2" onClick={()=> navigate("/statics")}>
        <div className="w-full h-8 bg-iconmoney bg-no-repeat pl-10">
          <h1 className="hidden sm:block">Statics</h1>
        </div>
      </button>
      <button className="bg-transparent text-start font-extralight ml-3 transition hover:translate-x-2" onClick={()=> navigate("/accountandcards")}>
        <div className="w-full h-8 bg-iconnote bg-no-repeat pl-10">
          <h1 className="hidden sm:block">Account and Cards</h1>
        </div>
      </button>
    </div>
    <div className="flex flex-col pb-12 gap-4">
      <button className="bg-transparent text-start font-extralight ml-12">
        Settings
      </button>
      <button className="bg-transparent text-start font-extralight ml-12">
        Log out
      </button>
    </div>
  </div>
  )
}

export default Navbar