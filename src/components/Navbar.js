import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <nav className="bg-transparent p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-blue text-2xl font-bold">My Website</div>
            <ul className="flex space-x-4 text-sm">
            <li>
                <a href="/" className="text-blue hover:underline">
                Home
                </a>
            </li>
            <li>
                <a href="/about" className="text-blue hover:underline">
                About
                </a>
            </li>
            <li>
                <a href="/services" className="text-blue hover:underline">
                Services
                </a>
            </li>
            <li>
                <a href="/contact" className="text-blue hover:underline">
                Contact
                </a>
            </li>
            </ul>
        </div>
        </nav>
    )
  }
}

export default Navbar
