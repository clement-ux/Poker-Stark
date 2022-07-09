import { useContract } from '@starknet-react/core'
import { Abi } from 'starknet'

import ERC20Abi from '../constants/abi/ERC20.json'

export function useERC20Contract(address : string) {
  return useContract({
    abi: ERC20Abi as Abi,
    address: address,
  })
}