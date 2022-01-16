const predictions = [
  {
    time: "12:00",
    match: "norwich vs liverpool",
  },
  {
    time: "21:00",
    match: "brighton vs a.villa",
  },
  {
    time: "15:00",
    match: "chelsea vs arsenal",
  },
]

const BookmarkCard = () => {
  return (
    <div className="mt-8 mb-20 lg:flex lg:justify-between lg:items-center">
      {predictions.map((game, index) => (
        <div
          key={index}
          className="bg-[#131C5E] lg:flex relative lg:justify-center lg:items-center px-10 py-5 m-3 lg:space-x-3 w-52 text-white rounded-lg cursor-pointer w- hover:bg-blue-700"
        >
          <p className="absolute -top-2 -left-2 px-2 py-1 text-xs font-medium bg-yellow-900 rounded-md">
            {index + 1}
          </p>
          <div className="text-xs font-bold">
            <h3>{game.time}</h3>
            <span>PRM</span>
          </div>
          <h4 className="text-base font-normal text-center uppercase">
            {game.match}
          </h4>
        </div>
      ))}
    </div>
  )
}

export default BookmarkCard
