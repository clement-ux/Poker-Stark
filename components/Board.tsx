import { useState } from 'react'
import {Card} from './Card'

const colors = ["H", "D", "C", "S"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export const Board = () => {

    const [step, setStep] = useState('pre-flop');

    const [betValue, setBetValue] = useState('0');

    const [riverCards, setRiverCards] = useState([<div/>]);

    const Bet = (value : string) => {
        console.log("bet " + value)
    }

    const Follow = () => {
        console.log("Follow")
    }

    const Fold = () => {
        console.log("Fold")
    }

    const nextStep = (step : string) =>{
        switch(step){
            case 'pre-flop':
                const drawValues = [values[Math.floor(Math.random() * 13)], values[Math.floor(Math.random() * 13)], values[Math.floor(Math.random() * 13)]];
                const drawColors = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
                setRiverCards(drawValues.map((value, index)=><Card value={value} symbol={colors[drawColors[index]]} size={8}/>));
                console.log(riverCards)
                setStep('flop');
                break;
            case 'flop':
                setRiverCards([...riverCards, <Card value={values[Math.floor(Math.random() * 13)]} symbol={colors[Math.floor(Math.random() * 4)]} size={8}/>]);
                setStep('turn');
                break;
            case 'turn':
                setRiverCards([...riverCards, <Card value={values[Math.floor(Math.random() * 13)]} symbol={colors[Math.floor(Math.random() * 4)]} size={8}/>]);
                setStep('river');
                break;
            case 'river': 
                setRiverCards([<div/>]);
                setStep('pre-flop');
                break;

        }
            
    }

    return(
        <div className='h-full w-full bg-gray-800'>
            
            <div className='h-3/4'>
                <div className='h-1/3'>

                </div>
                <div className='flex flex-row h-2/3 w-full justify-between items-center '>
                    <div className='flex w-1/4 justify-center items-center'>
                        <Card flipped size={8}/>
                    </div>
                    <div className='flex w-2/4 h-full justify-start items-center space-x-4'>
                        {riverCards}
                    </div>
                    <div className='flex w-1/4 justify-center items-center'>
                        <div className='flex h-12 w-24 rounded-md drop-shadow-lg squared-[1000px] bg-gradient-to-r from-red-800 via-red-700 to-red-600 justify-center items-center cursor-pointer text-white' onClick={()=>nextStep(step)}>
                            Next
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row h-1/4'>
                <div className='w-2/5'>

                </div>
                <div className='flex flex-row space-x-4 w-1/5'>
                    <Card value='1' symbol='H' flippable/>
                    <Card value='9' symbol='S' flippable/>
                </div>
                <div className='flex flex-row w-2/5 justify-evenly items-center'>
                    <input placeholder='0' className='border-2' onChange={(e)=>setBetValue(e.target.value)}/>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex justify-center items-center'>
                            <div className='flex h-12 w-40 rounded-md drop-shadow-lg squared-[1000px] bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 cursor-pointer justify-center items-center' onClick={()=>Bet(betValue)}>
                                <p>Bet</p>
                            </div>
                        </div>

                        <div className='flex justify-center items-center row-span-2'>
                        <div className='flex h-8 w-20 rounded-md drop-shadow-lg squared-[1000px] bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 cursor-pointer justify-center items-center' onClick={()=>Fold()}>
                            <p>Fold</p>
                        </div>
                        </div>
                        
                        <div className='flex h-12 w-40 rounded-md drop-shadow-lg squared-[1000px] bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 cursor-pointer justify-center items-center' onClick={()=>Follow()}>
                            <p>Check/Follow</p>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}