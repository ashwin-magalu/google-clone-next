import Head from 'next/head'
import Body from '../components/Body'
import Footer from '../components/Footer';
import Header from '../components/Header'

export default function Home() {
  return (
		<div className="flex flex-col  justify-center h-screen">
			<Head>
				<title>G-Clone</title>
				<link
					rel="icon"
					href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRyEQ5mOHyJxhG-ifOVsN7l6H3pgPMnPY6EQ&usqp=CAU"
				/>
      </Head>
      
      <Header />
      <Body />
      <Footer />
		</div>
	);
}
