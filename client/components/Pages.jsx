import React from 'react'

import NavBar from "Components/NavBar";

const Home = () => <div><NavBar /><section className="section main"><div className="container"><div>Home</div></div></section></div>
const Contact = () => <div><NavBar /><section className="section main"><div className="container"><div>Contact</div></div></section></div>
const PageNotFound = () => <div><NavBar /><section className="section main"><div className="container"><div>Page Not Found</div></div></section></div>

export { Home, Contact, PageNotFound }