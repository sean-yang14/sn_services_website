"use client"
 
import Form from "@/components/connect/form"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import Test from "@/components/connect/test"
import Title from "@/components/connect/title"

export default function Connect() {
	return (
		<>
			<Navbar page='main'/>
			<main className="font-serif">
				<Title />
				<Test />
			</main>
			<footer className='font-serif'>
				<Footer/>
			</footer>
		</>
	)
}