import './likeButton.css'
import { AiOutlineHeart} from 'react-icons/ai'
import React, {useState} from 'react'

const likeButton = () => {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
    if (liked) {
        setLiked(true);
        console.log('liked')
        } else {
        setLiked(false);
        console.log('un-liked')
        }
    };

  return (
    <div>
        <h1> Pizza 
            <AiOutlineHeart className={`like-button ${liked ? 'liked' : ''}`}
                onClick={() => {
                    handleClick
                }}
            /> 
        </h1>
    </div>
  )
}

export default likeButton