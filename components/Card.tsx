import React, { useState } from 'react'
import { ImClubs, ImDiamonds, ImHeart, ImSpades } from 'react-icons/im'

export const Card = ({value, symbol, size, flippable, flipped} : any) => {

    if(!size){
        size = 10
    }

    const height = (2*size).toString() 
    const width = (1.4*size).toString() 

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
        <div className={`h-[${height}vh] w-[${width}vh]`}>
            <div className={`h-full w-full [transition:transform_1s] cursor-pointer relative [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""}`} onClick={Flip}>
                <div className={`absolute w-full h-full border-2 border-black overflow-hidden rounded-lg [-webkit-backface-visibility:hidden] [backface-visibility:hidden] justify-center items-center`} >
                    <div className='flex justify-center items-center h-full w-full text-xl'>
                        {value} {symbolsComp[symbol]}
                    </div>
                </div>
                <div className={`absolute w-full h-full overflow-hidden rounded-lg [transform:rotateY(180deg)] [-webkit-backface-visibility:hidden] [backface-visibility:hidden]`}>
                    <img src={'/Images/card-back.jpg'} className='h-full w-full' alt='Card back' />
                </div>
            </div>
        </div>
    )

}