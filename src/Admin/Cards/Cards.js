import React from 'react'
import { CardsData } from '../../data/Data.js'
import Card from '../Card/Card.js'
import './Cards.css'

const Cards = () => {
  return (
    
    <div className="cards">
       {CardsData.map((card,id)=>{
        return(
            <div className="parentContainer">
                <Card
                tittle={card.tittle} 
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}
                />
            </div>
        )

       })}
    </div>
  )
}

export default Cards