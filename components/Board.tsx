import { useState } from 'react'
import {Card} from './Card'


const colors = ["H", "D", "C", "S"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

export const Board = () => {

    const [step, setStep] = useState('pre-flop');

    const [betValue, setBetValue] = useState('0');

    const [riverCards, setRiverCards] = useState([<div/>]);

    const HiddenHand = ({angle} : any) => {
        const rotate :any = {
            45 : "rotate-45",
            90 : "rotate-90",
            135 : "rotate-135",
            180 : "rotate-180",
            270 : "-rotate-90",
        }
        return ( 
            <div className={`flex flex-row w-[9vh] space-x-1 origin-center ${rotate[angle]}`}>
                <div className={`origin-center translate-x-2 -rotate-12`}>
                    <Card flipped size={3}/>
                </div>
                <div className={`origin-center -translate-x-2 rotate-12`}>
                    <Card flipped size={3}/>
                </div>
            </div>
        )
    }

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
                setRiverCards(drawValues.map((value, index)=><Card value={value} symbol={colors[drawColors[index]]} size={7}/>));
                console.log(riverCards)
                setStep('flop');
                break;
            case 'flop':
                setRiverCards([...riverCards, <Card value={values[Math.floor(Math.random() * 13)]} symbol={colors[Math.floor(Math.random() * 4)]} size={7}/>]);
                setStep('turn');
                break;
            case 'turn':
                setRiverCards([...riverCards, <Card value={values[Math.floor(Math.random() * 13)]} symbol={colors[Math.floor(Math.random() * 4)]} size={7}/>]);
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

            
                <div className='flex absolute right-0 w-1/4 justify-center items-center'>
                    <div className='flex h-12 w-24 rounded-md drop-shadow-lg squared-[1000px] bg-gradient-to-r from-red-800 via-red-700 to-red-600 justify-center items-center cursor-pointer text-white' onClick={()=>nextStep(step)}>
                        Next
                    </div>
                </div>
        
            <div className= "absolute h-[75%] w-[75%] top-[15%] right-[11%] p-4 bg-green-900 rounded-3xl drop-shadow-xl">
                
            </div>
           
            <div className= "absolute top-[46%] right-[83%] flex justify-center items-center box-border h-32 w-32 p-4 [background:linear-gradient(201.78deg,rgba(175,175,175,0.1519)_0%,rgba(175,175,175,0.49)_100%)] [backdrop-filter:blur(75px)] [border-radius: 14px transform: rotate(90deg)] rounded-xl"> 
                <HiddenHand angle={"90"}/>
            </div>

            <div className= "absolute top-[10%] right-[60%] flex justify-center items-center box-border h-32 w-32 p-4 [background:linear-gradient(201.78deg,rgba(175,175,175,0.1519)_0%,rgba(175,175,175,0.49)_100%)] [backdrop-filter:blur(75px)] [border-radius: 14px transform: rotate(90deg)] rounded-xl"> 
                <HiddenHand angle={"180"}/>
            </div>

            <div className= "absolute top-[10%] right-[30%] flex justify-center items-center box-border h-32 w-32 p-4 [background:linear-gradient(201.78deg,rgba(175,175,175,0.1519)_0%,rgba(175,175,175,0.49)_100%)] [backdrop-filter:blur(75px)] [border-radius: 14px transform: rotate(90deg)] rounded-xl"> 
                <HiddenHand angle={"180"}/>
            </div>

            <div className= "absolute top-[46%] right-[9%] flex justify-center items-center box-border h-32 w-32 p-4 [background:linear-gradient(201.78deg,rgba(175,175,175,0.1519)_0%,rgba(175,175,175,0.49)_100%)] [backdrop-filter:blur(75px)] [border-radius: 14px transform: rotate(90deg)] rounded-xl "> 
                <HiddenHand angle={"270"}/>
            </div>


            
            <div className='flex absolute bottom-[40%] right-[18%] flex-row h-[20%] w-[60%] justify-between items-center '>
                <div className='flex w-1/4 justify-center items-center'>
                    <Card flipped size={7}/>
                </div>
                <div className='flex w-3/4 h-full justify-start items-center space-x-4'>
                    {riverCards}
                </div>
                
            </div>
                
            <div className='absolute flex bottom-[2%] right-[36%] flex-row space-x-4 w-[20%]'>
                <Card value='14' symbol='H' flippable/>
                <Card value='9' symbol='S' flippable/>
            </div>
            <div className='absolute flex bottom-[5%] right-[5%] flex-row w-1/4 justify-evenly items-center'>
                <input placeholder='0' className='rounded-md drop-shadow-lg' onChange={(e)=>setBetValue(e.target.value)}/>
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
                    
                    <div className='flex h-12 w-35 rounded-md drop-shadow-lg squared-[1000px] bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 cursor-pointer justify-center items-center' onClick={()=>Follow()}>
                        <p>Check/Follow</p>
                    </div>
                    
                </div>
                
            </div>
                
        </div>
    )
}