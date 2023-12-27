import React from 'react'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'
import Navbar from '../components/Navbar'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'
import "./ProjectStyles.css"

const Project = () => {
  return (
    <div>
         <Navbar /> 
         <Hero2 heading={"project"} text={"Some of our recent works"} /> 
         <Work />
        <div className="priceSection">
          <PricingCard level="Basic" price={"$100"} days={"3 days"} pages={"3 pages"} />
          <PricingCard level="Premium" price={"$200"} days={"2 days"} pages={"5 pages"} />
          <PricingCard level="Business" price={"$300"} days={"5 days"} pages={"8 pages"} />
        </div>
        <Footer />
    </div>
  )
}

export default Project