// import { useState } from "react"
// import { useNavigate } from "react-router"
import React from 'react';
export default function Contact() {

	return (
		<main className="contact">
			<h2>Contact Us</h2>
			<div className="flex-container">
				<div>
					<h3>Connect with us via:</h3>
					<p>Address: <b>123 Main St, Anytown, USA</b></p>
					<p>Phone: <b>(888) 777-4321</b></p>
					<p>Email: <a href="mailto:enquiries@bookboulevard.com">enquiries@bookboulevard.com</a></p>
				</div>
				<div>
					<h3>Store Hours:</h3>
					<p>Monday - Thursday: 11:00am to 7pm</p>
					<p>Friday - Saturday: 11:00am to 9pm</p>
					<p>Store Closed Sunday</p>
				</div>
			</div>
		</main>
	)
}