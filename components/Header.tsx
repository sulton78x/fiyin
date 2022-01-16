import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const Header = () => {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    router.push("/login")
    setLoggedIn(!loggedIn)
  }

  return (
    <header className="block lg:flex lg:justify-between lg:items-center">
      <div className="w-1/2">
        <div className="relative w-52 h-10 cursor-pointer">
          <Link href="/">
            <Image
              src="/assets/icon.png"
              alt="book all bets logo"
              layout="fill"
              objectFit="cover"
            />
          </Link>
        </div>
      </div>
      <nav className="inline-block lg:flex lg:items-center lg:space-x-5 lg:w-1/ text-[#131C5E] font-bold">
        <ul className="space-y-8 lg:space-x-8">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Code Converter</a>
          </Link>
          <Link href="/">
            <a>News</a>
          </Link>
          <Link href="/">
            <a>Contact</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
        </ul>
        {loggedIn ? (
          ""
        ) : (
          <button
            onClick={handleLogin}
            className="font-bold px-10 py-1 bg-gray-100 rounded-2xl transform transition-colors duration-100shadow-sm shadow-black/30 hover:bg-[#F4A641] hover:text-white"
          >
            Login
          </button>
        )}
      </nav>
    </header>
  )
}

export default Header
