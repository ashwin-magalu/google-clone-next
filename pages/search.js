import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from "../Response"
import { useRouter } from "next/router";

const Search = ( { results } ) => {
    const router = useRouter();

    return (
			<div>
				<Head>
                <title>{ router.query.query } - G Search</title>
					<link
						rel="icon"
						href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyEQ5mOHyJxhG-ifOVsN7l6H3pgPMnPY6EQ&usqp=CAU"
					/>
            </Head>
            
            <SearchHeader />

            <SearchResults results={results} />
			</div>
		);
};

export default Search;

export const getServerSideProps = async ( context ) => {
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData ? Response : await fetch(
			`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.query}&start=${startIndex}`
    ).then( response => response.json() )
    
    return {
        props: {
            results: data
        }
    }
}
