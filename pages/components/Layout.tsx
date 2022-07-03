import { useState } from "react"
import { Header } from "./Header"

export const Layout = ({children} :any) => {
    const [showSide, setShowSide] = useState(false)

    return(<div className="min-h-[100vh] w-full">
            <Header/>
            <div className="flex h-[95vh] w-full">
                <div className={`flex ${showSide ? "w-64" : "w-16"} bg-gray-400 pl-4 ease-in duration-300`}>
                    <div className="bg-gray-600 h-8 w-8" onClick={() => setShowSide(!showSide)}>

                    </div>
                </div>
                {children}
            </div>
            
        </div>)
        
}