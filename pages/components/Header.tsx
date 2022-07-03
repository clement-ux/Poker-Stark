export const Header = () =>{
    return(
        <div className="flex flex-row w-full h-16 bg-gray-400 justify-between pl-12 pr-12 pt-2">
            <div className="flex h-12 items-center justify-center"><h1>Poker Starks</h1></div>
            <div className="flex flex-row space-x-4">
                <div className="flex h-12 items-center justify-center">
                    0x00...0000
                </div>
                <div className="flex w-28 h-28 rounded-[3000px] bg-gray-300 justify-center items-center text-lg">
                    0$
                </div>
            </div>
        </div>
    )
}