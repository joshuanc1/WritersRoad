import React, {useState,useMemo} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';

const Rating = ({rating, onRating}) => {
    const [hoverRating, setHoverRating] = useState(0);

    const getColor= (index) => {
        if(hoverRating >= index){
            return "#ffdc2e";
        } else if(!hoverRating && rating >=index) {
            return "#ffdc2e";
        }
        return "#808080";
    }

    const starRating = useMemo(() => {
        return Array(5).fill(0).map((_, i) => i + 1).map((idx) => (
            
            <FontAwesomeIcon
                key={idx}
                icon={faStar}
                color={getColor(idx)}
                onClick = {() => onRating(idx)}
                style={{color: getColor(idx)}}
                onMouseEnter={()=>setHoverRating(idx)}
                onMouseLeave={()=> setHoverRating(0)}          
            />
        ))
    }, [rating, hoverRating, onRating])

  return (
    <div>{starRating}</div>
  )
}

export default Rating