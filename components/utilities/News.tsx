import { MdOutlineArrowForwardIos } from "react-icons/md"
const News = () => {
  return (
    <div className="p-5 mt-10 bg-white shadow-md shadow-slate-900/30">
      <div className="lg:flex lg:justify-between lg:items-center mb-8">
        <h2 className="lg:text-3xl text-blue text-[#131C5E] font-bold">
          Top News
        </h2>
        <div className=" cursor-pointer flex items-center space-x-2">
          <h3 className="whitespace-nowrap">see more</h3>
          <MdOutlineArrowForwardIos className="text-[#131C5E]" />
        </div>
      </div>

      <div className="overflow-hidden space-y-10 lg:flex lg:justify-between lg:items-center lg:mt-5">
        <div className="">
          <div>
            <img width={300} src="/assets/bet.jpg" alt="" />
          </div>
          <div className="p-5 w-[300px] bg-white shadow-md w- shadow-slate-900/30">
            <div className="lg:justify-between lg:items-center lg:space-x-2 lg:flex">
              <h3 className="text-[#131C5E] font-bold py-2 text-center text-[16px] whitespace-nowrap">
                Tips on Betting
              </h3>
              <p className="text-[10px] text-[#F4A641] whitespace-nowrap">
                Wed 12:00pm
              </p>
            </div>

            <p>
              Check in for the best free football betting tips for today’s
              matches. Our football tips are made by industry experts, giving
              you the inside scoop on all the big matches. Take a look through
              our selection of tips below, and good luck!{" "}
              <a className="text-[#F4A641]" href="#">
                Learn more
              </a>
            </p>
          </div>
        </div>

        <div className="">
          <div>
            <img width={300} src="/assets/img1.jpg" alt="" />
          </div>
          <div className="p-5 w-[300px] bg-white shadow-md w- shadow-slate-900/30">
            <div className="lg:items-center lg:space-x-2 lg:flex lg:justify-between">
              <h3 className="text-[#131C5E] font-bold py-2 text-center text-[16px] whitespace-nowrap">
                Football Conveter
              </h3>
              <p className="text-[10px] text-[#F4A641] whitespace-nowrap">
                Mon 11:00am
              </p>
            </div>

            <p>
              Here at Bookallbets.com converting from one bet to another is our
              specialty we have partner with a lot of betting sets to give you
              the best converting system. Check the blog on how to converter.
              <a className="text-[#F4A641]" href="#">
                Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* cards */}
    </div>
  )
}

export default News
