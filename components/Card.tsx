import React, { useState } from 'react'

const Card = () => {

    const [isFlipped, setIsFlipped] = useState(false)

    const Flip = () => {
        setIsFlipped(!isFlipped)
    }


    return (
        <div className="h-[15vh] w-[11vh]">
            <div className={`h-full w-full [transition:transform_1s] cursor-pointer relative [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`} onClick={Flip}>
                <div className={`absolute w-full h-full bg-sky-500 overflow-hidden [-webkit-backface-visibility:hidden] [backface-visibility:hidden] `} >
                    <p>Avant</p>
                </div>
                <div className={`absolute w-full h-full overflow-hidden [transform:rotateY(180deg)] [-webkit-backface-visibility:hidden] [backface-visibility:hidden]`}>
                    <img src={'/Images/card-back.jpg'} className='h-full w-full' alt='Card back' />
                </div>
            </div>
        </div>
    )

}

export default Card