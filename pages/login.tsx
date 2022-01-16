import Footer from "../components/Footer"
import Header from "../components/Header"
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { useRouter } from "next/router"

const Login = () => {
  const router = useRouter()
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center overflow-hidden mt-8 bg-[#f2f3f5] rounded-xl shadow-md shadow-slate-900/30 p-10">
        <div className="space-y-10">
          <div>
            <img src="/assets/login.png" alt="" />
            <h2 className="text-2xl">Welcome Back</h2>
          </div>

          <div className="mt-2">
            <h3 className="text-[#131C5E] font-semibold">Username:</h3>
            <input
              type="text"
              name=""
              id=""
              className="w-96 bg-white rounded-xl border-none shadow-md focus:outline-none shadow-slate-900/30"
            />
          </div>

          <div className="mt-2">
            <h3 className="text-[#131C5E] font-semibold">Password:</h3>
            <input
              type="password"
              name=""
              id=""
              className="w-96 bg-white rounded-xl border-none shadow-md focus:outline-none shadow-slate-900/30"
            />
            <br />
            <a className="mt-5 text-sm" href="#">
              Forget Password
            </a>
          </div>

          <div className="">
            <button
              type="submit"
              className="whitespace-nowrap font-medium px-20 py-3 text-[#F4A641] rounded-md bg-[#131C5E]"
            >
              Continue
            </button>

            <h5
              onClick={() => router.push("/register")}
              className="text-[#F4A641] cursor-pointer mt-3"
            >
              No account? <a className="text-[#131C5E]">Sign-Up Here</a>
            </h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
