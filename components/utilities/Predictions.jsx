import PredictionCard, { predictions } from "./PredictionCard"

const Predictions = () => {
  return (
    <div className="hidden lg:block pt-20 bg-gray-300 rounded-tl-md rounded-tr-md">
      <h3 className="flex items-center justify-center mb-5 text-center text-[#131C5E] text-3xl font-bold">
        Top Predictions
      </h3>
      {/* cards */}
      <div>
        <PredictionCard predictions={predictions} />
      </div>
    </div>
  )
}

export default Predictions
