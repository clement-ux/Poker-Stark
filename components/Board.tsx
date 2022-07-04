import { useState } from 'react'
import {Card} from './Card'

export const Board = () => {

    const [betValue, setBetValue] = useState('0')

    const Bet = (value : string) => {
        console.log("bet " + value)
    }

    const Follow = () => {
        console.log("Follow")
    }

    const Fold = () => {
        console.log("Fold")
    }

    return(
        <div className='h-full w-full'>
            <div className='h-3/4'>

            </div>
            <div className='flex flex-row h-1/4'>
                <div className='w-2/5'>

                </div>
                <div className='flex flex-row space-x-4 w-1/5'>
                    <Card value='10' symbol='S'/>
                    <Card value='K' symbol='D'/>
                </div>
                <div className='flex flex-row w-2/5 justify-evenly items-center'>
                    <input placeholder='0' className='border-2' onChange={(e)=>setBetValue(e.target.value)}/>
                    <div className='flex h-32 w-32 rounded-[1000px] bg-sky-400 cursor-pointer justify-center items-center' onClick={()=>Bet(betValue)}>
                        <p>Bet</p>
                    </div>
                    <div className='flex h-32 w-32 rounded-[1000px] bg-gray-400 cursor-pointer justify-center items-center' onClick={()=>Follow()}>
                        <p>Check/Follow</p>
                    </div>
                    <div className='flex h-32 w-32 rounded-[1000px] bg-red-400 cursor-pointer justify-center items-center' onClick={()=>Fold()}>
                        <p>Fold</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}