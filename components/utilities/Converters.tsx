const converters = () => {
  return (
    <div>
      <div className="">
        <div className="text-center">
          <h3 className="text-[#131C5E] text-lg lg:text-5xl font-bold mb-1">
            Welcome!
          </h3>
          <p className="text-[#131C5E] text-sm lg:text-2xl">
            Converter App for converting booking bets
          </p>
        </div>

        <div className="overflow-hidden mt-8 bg-white rounded-xl shadow-md shadow-slate-900/30 sm:">
          <div className="p-5 bg-[#f2f3f5]">
            <div className="mt-8 mb-10">
              <h3 className="text-[#131C5E] font-semibold">
                Enter booking Code
              </h3>
              <input
                type="text"
                name=""
                id=""
                className="w-96 bg-white rounded-xl border-none shadow-md focus:outline-none shadow-slate-900/30"
              />
            </div>

            <div className="space-y-8 lg:mb-20 lg:justify-between lg:items-center lg:flex">
              <div className="">
                <h3 className="text-[#131C5E] font-semibold">Convert From</h3>
                <select
                  name=""
                  id=""
                  className="w-96 bg-white rounded-xl border-none shadow-md focus:outline-none shadow-slate-900/30"
                >
                  <option className="text-[#131C5E]">Select Bookmaker</option>
                </select>
              </div>

              <div className="">
                <h3 className="text-[#131C5E] font-semibold">Convert To</h3>
                <select
                  name=""
                  id=""
                  className="w-96 bg-white rounded-xl border-none shadow-md focus:outline-none shadow-slate-900/30"
                >
                  <option className="text-[#131C5E]">Select Bookmaker</option>
                </select>
              </div>
            </div>

            <div className="mt-10 lg:flex lg:justify-center">
              <button
                type="submit"
                className="font-medium px-20 py-1 bg-[#F4A641] rounded-md text-[#131C5E]"
              >
                Converter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default converters
