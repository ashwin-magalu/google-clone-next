import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid"
import Image from "next/image"
import {useRouter} from "next/router"
import { useRef } from "react"
import Avatar from "./Avatar"
import HeaderOptions from "./HeaderOptions"

const SearchHeader = () => {
    const router = useRouter()
    const inputRef = useRef( null )
    
    const search = (e) => {
        e.preventDefault()

        const term = inputRef.current.value

        if ( !term ) return;

        router.push(`/search?query=${term}`);
    }
    

    return (
			<header className="sticky top-0 bg-white">
				<div className="flex w-full p-6 items-center">
					<Image
						src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
						width={120}
						height={40}
						className="cursor-pointer"
						onClick={() => router.push(`/`)}
					/>

					<form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-5 sm:ml-10 md:ml-32 lg:ml-48  mr-5">
						<input
							type="text"
							ref={inputRef}
							className="flex-grow w-full focus:outline-none"
						/>
						<XIcon
							className="h-7 cursor-pointer transition duration-100 transform hover:scale-125 text-gray-500 mr-3"
							onClick={() => (inputRef.current.value = "")}
						/>
						<MicrophoneIcon className="h-6 mr-3 text-blue-500 hidden sm:inline-flex border-l-2 pl-4 border-gray-300" />
						<SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex " />
						<button hidden type="submit" onClick={search}>
							Search
						</button>
					</form>

					<Avatar className="ml-auto"
						url={
							"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyEQ5mOHyJxhG-ifOVsN7l6H3pgPMnPY6EQ&usqp=CAU"
						}
					/>
                </div>
                
                <HeaderOptions />
			</header>
		);
}

export default SearchHeader
