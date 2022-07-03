import { connect } from "@argent/get-starknet";
import { useEffect, useState } from "react";
import {formatAddress} from '../utils/formatAddress'

export const Header = () =>{

    const [address, setAddress] = useState('');
    const [icon, setIcon] = useState('');

    async function enableAccount(){
        const starknet = await connect();
        if(starknet){
            await starknet.enable();
            setAddress(starknet.account.address);
            setIcon(starknet.icon)
        }
        
        console.log(starknet);
    }

    return(
        <div className="flex flex-row w-full h-[5vh] bg-gray-400 justify-between pl-12 pr-12 pt-2">
            <div className="flex h-12 items-center justify-center"><h1>Poker Starks</h1></div>
            <div className="flex flex-row space-x-4">
                {address !== '' ? 
                    <div className="flex h-12 items-center justify-center">
                        <img src={icon} className='h-8 pr-4' />
                        {formatAddress(address)}
                    </div>
                :
                <div className="flex h-12 p-2 rounded-md items-center justify-center hover:bg-gray-500 cursor-pointer" onClick={() => enableAccount()}>
                    Connect wallet
                </div>
                }
                
                <div className="flex w-[10vh] h-[10vh] rounded-[1000px] bg-gray-300 justify-center items-center text-lg">
                    0$
                </div>
            </div>
        </div>
    )
}