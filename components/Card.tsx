import React, { useState } from 'react'
import { ImClubs, ImDiamonds, ImHeart, ImSpades } from 'react-icons/im'
import { getCard } from '../utils/getCard'

export const Card = ({value, symbol, size, flippable, flipped} : any) => {

    if(![3,7,8,10].includes(size)){
        size = 10
    }

    const cardUrl = getCard(value, symbol)

    console.log(cardUrl)

    const cardSizeStyle = {
        3 : "h-[6vh] w-[4.2vh]",
        7 : "h-[14vh] w-[9.8vh]",
        8 : "h-[16vh] w-[11.2vh]",
        10 : "h-[20vh] w-[14vh]"
    }

    const [isFlipped, setIsFlipped] = useState(flipped)

    const Flip = () => {
        if(flippable){
            setIsFlipped(!isFlipped)
        }
    }

    const symbolsComp = {
        H : <ImHeart color='red'/>,
        D : <ImDiamonds color='red' />,
        C : <ImClubs color='black'/>,
        S : <ImSpades color='black'/>
    }


    return (
        <div className={cardSizeStyle[size]}>
            <div className={`h-full w-full [transition:transform_1s] shadow-black rounded-[1vh] shadow-lg cursor-pointer relative [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""} p-0`} onClick={Flip}>
                <div className={`${cardUrl ? "" :"bg-white"} absolute w-full h-full [-webkit-backface-visibility:hidden] [backface-visibility:hidden] -p-1`} >
                    {cardUrl && <img src={cardUrl} className='h-full w-full rounded-[1vh]' alt='Card front' />}
                </div>
                <div className={`absolute w-full h-full [transform:rotateY(180deg)] [-webkit-backface-visibility:hidden] [backface-visibility:hidden] -p-1`}>
                    <img src={'/Images/CardBack.png'} className='h-full w-full rounded-[1vh]' alt='Card back' />
                </div>
            </div>
        </div>
    )

}