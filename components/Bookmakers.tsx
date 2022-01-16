import { MdOutlineArrowForwardIos } from "react-icons/md"
import BookmarkCard from "./utilities/BookmarkCard"

const Bookmakers = () => {
  return (
    <div className="p-5 mt-10 bg-white shadow-md shadow-slate-900/30">
      <div className="lg:flex lg:justify-between lg:items-center">
        <h2 className="lg:text-3xl text-blue text-[#131C5E] font-bold">
          Top Online Bookmakers
        </h2>
        <div className="flex items-center text-sm lg:space-x-2 cursor-pointer">
          <h3 className="whitespace-nowrap">see more</h3>
          <MdOutlineArrowForwardIos />
        </div>
      </div>
      {/* cards */}
      <BookmarkCard />
    </div>
  )
}

export default Bookmakers
