import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRef } from "react";
import {useRouter} from "next/router"

const Body = () => {
    const inputRef = useRef( null )
    const router = useRouter()

    const search = (e) => {
        e.preventDefault();

        const term = inputRef.current.value;
        
        if ( !term ) return;

        router.push(`/search?query=${term}`)
    }
    

	return (
		<form className="flex flex-col items-center mt-44 flex-grow w-4/5 m-auto">
			<Image
				src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
				width={300}
				height={100}
			/>
			{/* Don't forget to add domain link in next.config.js file, else it will show error */}

			<div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-lg lg:max-w-2xl">
				<SearchIcon className="h-5 mr-3 text-gray-500" />
				<input
					type="text"
					className="focus: outline-none flex-grow"
					ref={inputRef}
				/>
				<MicrophoneIcon className="h-5" />
			</div>

			<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
				<button className="btn" onClick={search}>
					Google Search
				</button>
				<button className="btn">I'm Feeling Lucky</button>
			</div>
		</form>
	);
};

export default Body;
