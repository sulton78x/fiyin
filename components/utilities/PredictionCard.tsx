import { FunctionComponent } from "react"
import { IconType } from "react-icons"
import { GrAchievement } from "react-icons/gr"
import { AiFillStar } from "react-icons/ai"

export interface IPrediction {
  Icon: IconType
  content: string
  starred?: boolean
}

export const predictions: IPrediction[] = [
  {
    Icon: GrAchievement,
    content: "World Cup Predictions",
  },
  {
    Icon: AiFillStar,
    content: "Premier League",
    starred: true,
  },
  {
    Icon: AiFillStar,
    content: "La liga",
  },
  {
    Icon: AiFillStar,
    content: "Ligue 1",
  },
  {
    Icon: AiFillStar,
    content: "Bundesliga",
  },
  {
    Icon: AiFillStar,
    content: "Champions League",
  },
  {
    Icon: AiFillStar,
    content: "Europa League",
  },
  {
    Icon: AiFillStar,
    content: "Fa Cup",
  },
  {
    Icon: AiFillStar,
    content: "AFCON",
  },
  {
    Icon: AiFillStar,
    content: "South Africa League",
  },
  {
    Icon: AiFillStar,
    content: "Asia League",
  },
  {
    Icon: AiFillStar,
    content: "America Football League",
  },
  {
    Icon: AiFillStar,
    content: "Nigeria Football League",
  },
  {
    Icon: AiFillStar,
    content: "Nations League",
  },
  {
    Icon: AiFillStar,
    content: "Euros",
  },
  {
    Icon: AiFillStar,
    content: "Club World Cup",
  },
  {
    Icon: AiFillStar,
    content: "Seria A",
  },
]

const PredictionCard: FunctionComponent<{ predictions: IPrediction }> = ({
  predictions: { Icon, content },
}) => {
  return (
    <div>
      {predictions.map(({ Icon, content }, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 text-sky-600 bg-white rounded-t-md border-b-2 border-indigo-900"
        >
          <Icon />
          <p>{content}</p>
        </div>
      ))}
    </div>
  )
}

export default PredictionCard
