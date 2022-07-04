import { useState } from "react"
import { Header } from "./Header"
import { AiOutlineMenu } from "react-icons/ai"

export const Layout = ({children} :any) => {
    const [showSide, setShowSide] = useState(false)

    return(<div className="min-h-[100vh] w-full">
            <Header/>
            <div className="flex h-[95vh] w-full">
                <div className={`flex ${showSide ? "w-64" : "w-14"} bg-gray-400 pl-2 ease-in duration-300`}>
                    <div className="flex bg-gray-400 hover:bg-gray-500 rounded-[3px] h-10 w-10 items-center justify-center cursor-pointer" onClick={() => setShowSide(!showSide)}>
                        <AiOutlineMenu size={20}/>
                    </div>
                </div>
                {children}
            </div>
            
        </div>)
        
}