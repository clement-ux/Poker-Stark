import {formatAddress} from '../pages/utils/formatAddress';
import { useStarknet, useConnectors, useStarknetCall } from '@starknet-react/core';
import { useState } from 'react';
import { ETHER } from '../constants/tokens';
import { useERC20Contract } from '../hooks/useERC20Contract';
import { toBN } from 'starknet/dist/utils/number';

export const Header = () =>{

    const { account } = useStarknet();
    const { available, connect, disconnect } = useConnectors();

    const [showAvailable, setShowAvailable] = useState(false);

    const { contract } = useERC20Contract(ETHER);
    const { data:balance, error } = useStarknetCall(
        {contract : contract,
        method: "balanceOf",
        args : [account]})

    return(
        <div className="flex flex-row w-full h-[8vh] bg-gray-900 justify-between pl-12 pr-12 pt-2 text-white">
            <div className="flex flex-row h-[6vh] items-center justify-center space-x-4">
                <img className='h-full' src='/Images/logo.png' alt='logo'/>
                <div>Poker Starks</div>
            </div>
            <div className="flex flex-row space-x-4">
                {account ? 
                    <div className="flex h-[8vh] items-center justify-center" onClick={() => setShowAvailable(!showAvailable)}>
                        <div className="flex h-12 p-2 rounded-md items-center justify-center hover:bg-gray-500 cursor-pointer text-white">
                            {formatAddress(account)}
                        </div>
                        <div className={`absolute flex top-[8vh] bg-white border-black radius-1 z-10 ${showAvailable ? "p-2" : ""} rounded-md`}>
                            {showAvailable && 
                                <div className='text-black cursor-pointer' onClick = {() => disconnect()}>
                                    Disconnect
                                </div>
                            }
                        </div>
                    </div>
                :
                <div className="flex h-[8vh] items-center justify-center" onClick={() => setShowAvailable(!showAvailable)}>
                    <div className="flex h-12 p-2 rounded-md items-center justify-center hover:bg-gray-500 cursor-pointer text-white">Connect wallet</div>
                    <div className={`absolute flex top-[8vh] bg-white border-black radius-1 z-10 ${showAvailable ? "p-2" : ""} rounded-md`}>
                    {showAvailable && available.map((connector) => (
                        <div className='text-black cursor-pointer' key={connector.id()} onClick={() => connect(connector)}>
                            {`Connect ${connector.name()}`}
                        </div>
                    ))}
                    </div>
                </div>
                }
                
                <div className="flex w-[10vh] h-[10vh] rounded-[1000px] bg-gray-300 justify-center items-center z-10 text-lg text-white">
                    {balance ? (balance[0].low.toString() / 10**18).toFixed(5) : "0"} ETH
                </div>
            </div>
        </div>
    )
}