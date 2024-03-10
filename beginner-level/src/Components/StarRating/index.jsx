import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'
const StarRating = ({noOfStar = 5}) => {
    const[rating, setRating] =useState(0)
    const[hover, setHover] = useState(0)

    const handleClick=(getCurrentIndex)=>{
        setRating(getCurrentIndex)
    }

    const handleMove=(getCurrentIndex)=>{
        setHover(getCurrentIndex)
    }

    const handleLeave=()=>{
        setHover(rating);
    }

  return (
    <div>
      {[...Array(noOfStar)].map((_,index)=>{
        index+=1
        return <FaStar
        key={index}
        className={index <= (hover || rating) ? 'active' : 'inactive'}
        onClick={()=>{handleClick(index)}}
        onMouseMove={()=>{handleMove(index)}}
        onMouseLeave={()=>{handleLeave()}}
        />
      })
    }
    </div>
  )
}

export default StarRating;