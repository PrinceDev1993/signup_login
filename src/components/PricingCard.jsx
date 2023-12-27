import React from 'react'
import { Link } from 'react-router-dom'
import './PricingCardStyles.css'

const PricingCard = ({level, price, days, pages, }) => {
  return (
    <div className='pricing'>
        <div className="card-container">
            <div className="card">
                <h1> - {level} - </h1>
                <span className="bar"></span> <hr className='bar' />
                <p className="btc">{price}</p>
                <p> - {days} -</p>
                <p> - {pages} - </p>
                <p> - featured - </p>
                <p> -Responsive Design- </p>
                <Link to='/Contact'>
                  <button className="btn">purchase now</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard