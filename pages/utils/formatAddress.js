export const formatAddress = (address) => {
    return address.slice(0,4) + "..." + address.slice(61,65)
}