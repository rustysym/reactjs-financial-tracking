import { useNavigate } from "react-router-dom"

function SignUp() {
  const navigate = useNavigate();

  return (
    <>
    <div className="flex h-full w-full overflow-y-hidden overflow-x-hidden fixed z-10 top-0 ">
      <div className="w-full bg-black/70 -z-30 md:w-1/2">
        <div className="absolute -z-20 bg-shapes bg-transparent w-1/2 h-full transform rotate-0 translate-x-[-10%] translate-y-[-20%]"></div>
        <div className=" flex-shrink-0 z-10 h-full w-full bg-gradient-radial from-slate-100/20 via-slate-700-[0.04] to-slate-950/0 bg-blend-overlay backdrop-blur-2xl">
          <div className="absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] text-center">
            <div className="hidden w-[25rem] h-[28rem] bg-illustration bg-transparent md:flex"></div>
            <h1 className="hidden text-white font-inter font-medium leading-normal w-[23rem] text-[2rem] md:flex">
              Make your financial tracking easier
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute w-full bg-inherit md:w-1/2 md:bg-card md:relative">
        <div className="flex flex-col items-center">
          <div className="flex h-[100vh] items-center">
            <div className="flex flex-col gap-4 items-start">
              <h1 className="text-white font-inter font-medium leading-normal w-[23rem] text-[2rem]">
                Sign Up
              </h1>
              <span className="text-white text-center font-inter text-base font-light leading-normal">
                Name
              </span>
              <input type="email" className="w-96 h-12 bg-white rounded-xl text-black pl-3 border-none"/>
              <span className="text-white text-center font-inter text-base font-light leading-normal">
                E-mail
              </span>
              <input type="email" className="w-96 h-12 bg-white rounded-xl text-black pl-3 border-none"/>
              <span className="text-white text-center font-inter text-base font-light leading-normal">
                Password
              </span>
              <input type="password" className="w-96 h-12 bg-white rounded-xl text-black pl-3 border-none"/>
              <button className=" border border-gray-300 rounded-2xl bg-transparent w-40 h-11 self-center mt-5">
                Sign Up
              </button>  
              <div className="flex flex-col items-center self-center">
              <span className="text-sm font-light">Do you have an account ?</span>  
              <span className="cursor-pointer underline text-base" onClick={()=> navigate("/login")}>Sign In</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default SignUp