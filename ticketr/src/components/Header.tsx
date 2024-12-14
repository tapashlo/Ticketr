
import Link  from "next/link"
import Image from "next/image"
import logo from "@/images/logo.png"
import { SignedIn, SignedOut, UserButton,SignInButton } from "@clerk/nextjs"


/*************  ✨ Codeium Command ⭐  *************/
/**
 * The Header component renders a header section with a logo.
 * 
 * It includes a link to the homepage and displays an image as the logo with specified size.
 * The component also applies a border at the bottom for styling purposes.
 */

/******  63a230e9-0159-46f4-9c87-432f6292e90c  *******/
function Header() {
  return (
    <div className="border-b">
        <div className="flex flex-col lg:flex-row items-center gap-4 p-4">
            <div className="flex items-center justify-between w-full lg:w-auto">
                <Link href="/" className = "font-bold shrink-0">
                <Image
                src = {logo}
                alt="logo"
                width = {100}
                height = {100}
                className = "w-14 lg:w-28"
                />

                </Link>

                <div className="lg:hidden">
                    <SignedIn>
                    <UserButton/>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode = 'modal'>
                            <button className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm rounded-lg hover:bg-gray-200 transition border border-gray-300">
                                Sign In

                            </button>

                        </SignInButton>
                    </SignedOut>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
