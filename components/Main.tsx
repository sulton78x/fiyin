import { RiFootballLine } from "react-icons/ri"
import Bookmakers from "./Bookmakers"
import Tabs from "./Tabs"
import { Context } from "./utilities/Context"
import Converters from "./utilities/Converters"
import News from "./utilities/News"
import Predictions from "./utilities/Predictions"
import SliderOne from "./utilities/SliderOne"

const Main = () => {
  return (
    <div className="grid grid-cols-12 lg:gap-10 mx-2 lg:m-10 lg:w-screen box-content">
      {/* image carousel */}
      <div className="col-span-12 lg:col-span-8 lg:box">
        <div className="overflow-hidden rounded-xl h-[400px]">
          <figure className="relative w-[500%] m-0 left-0 slide mb-10">
            <img
              className="object-contain object-center h-full bg-yellow-500"
              src="/assets/img5.jpg"
              alt=""
            />
            <img
              className="object-contain object-center h-full bg-yellow-500"
              src="/assets/bet5.jpg"
              alt=""
            />
            <img
              className="object-contain object-center h-full bg-yellow-500"
              bg-yellow-500
              src="/assets/img5.jpg"
              alt=""
            />
            <img
              className="object-contain object-center h-full bg-yellow-500"
              bg-yellow-500
              src="/assets/bte3.jpg"
              alt=""
            />
            <img
              className="object-contain object-center h-full bg-yellow-500"
              bg-yellow-500
              src="/assets/banner.png"
              alt=""
            />
          </figure>
          {/* -------- carousel ends ------------------ */}
        </div>

        {/* Bookmakers */}
        <div className="mt-10">
          <Bookmakers />
        </div>

        <div className="mt-20">
          <News />
        </div>

        <div className="mt-10">
          <Converters />
        </div>

        <div className="mt-10">
          <Context />
        </div>
      </div>

      {/* sports predictions */}
      <div className="col-span-4 mx-20">
        <Predictions />
      </div>
      {/* betting tab */}
    </div>
  )
}

export default Main
