import { BsFillCupFill } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="p-5 space-y-5 text-white bg-blue-800 sm:p-10 sm:space-x-10 sm:flex sm:justify-between">
      <div>
        <img src="/assets/icon.png" alt="" width={500} height={500} />
      </div>
      <div className="flex justify-between items-start w-full">
        <div>
          <p>Email:nfo@bookallbets.com</p>
          <p>Phone:</p>
        </div>
      </div>
      <div className="flex justify-between items-start w-full sm:place-items-start">
        <div>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Contact</p>
          <p>News</p>
        </div>
      </div>
      {/* icons */}
      <div></div>
    </footer>
  )
}

export default Footer
