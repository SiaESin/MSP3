// import { useState } from "react"
// import { useNavigate } from "react-router"

export default function Contact() {

	return (
		<main>
			<h1>Contact Us</h1>
			<div className="contact">
				<h2>Thank you for visiting our website!</h2>
				<h3>Feel free to contact us at any time!</h3>
				<div className="contact-info">
					<p>Address: <b>123 Main St, Anytown, USA</b></p>
					<p>Phone: <b>(888) 777-4321</b></p>
					<p>Email: <a href="mailto:enquiries@bookboulevard.com">enquiries@bookboulevard.com</a></p>
				</div>
			</div>
		</main>
	)
}