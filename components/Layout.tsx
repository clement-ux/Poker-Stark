import { useState } from "react"
import { Header } from "./Header"
import { AiOutlineArrowLeft, AiOutlineMenu } from "react-icons/ai"
import { BestHands } from "./BestHands"

export const Layout = ({children} :any) => {
    const [showSide, setShowSide] = useState(false)

    const [componentToShow, setComponentToShow] = useState("")

    const changeShowSide = () => {
        if(showSide){
            setComponentToShow("")
        }
        setShowSide(!showSide);
    }

    const comp : any = {
        "bestHands" : <BestHands/>
    }

    return(<div className="min-h-[100vh] w-full ">
            <Header/>
            <div className="flex h-[92vh] w-full ">
                <div className={`flex flex-col ${showSide ? "w-96" : "w-[8vh]"} bg-gray-900 pl-6 ease-in duration-300 text-white space-y-14`}>
                    <div className="flex bg-gray-900 hover:bg-gray-500 rounded-[3px] h-10 w-10 items-center justify-center cursor-pointer text-white" onClick={() => changeShowSide()}>
                        <AiOutlineMenu size={20}/>
                    </div>
                    <div className="flex flex-row">
                    {
                        componentToShow !== "" &&
                        <div className="flex bg-gray-900 hover:bg-gray-500 rounded-[3px] h-10 w-10 items-center justify-center cursor-pointer text-white" onClick={() => setComponentToShow("")}>
                            <AiOutlineArrowLeft size={20}/>
                        </div>
                    }
                    <div className= {`flex flex-col h-auto w-full space-y-4`}>
                        { (componentToShow == "bestHands" || componentToShow == "") &&
                            <div className="flex flex-row">
                                <div className={`flex ${showSide ? "row-span-2" : "row-span-1"} cursor-pointer`} onClick={()=>{setComponentToShow("bestHands"), setShowSide(true)}}>
                                <img className="h-auto w-[40px] mr-4 ml-4" src='/Images/CardsIcons.png'/>
                                </div>
                                <div className={`flex ${showSide ? "text-white transition ease-in duration-300 delay-300 row-span-2" : "text-white/0"} cursor-pointer overflow-hidden`} onClick={()=>setComponentToShow("bestHands")}>{showSide && "Best Hands"}</div>
                            </div>
                        }
                        { (componentToShow == "" || componentToShow == "") &&
                            <div className="flex flex-row">
                                <div className={`flex cursor-pointer`}>
                                    <img className="h-auto w-[40px] mr-4 ml-4" src='/Images/CardsIcons.png'/>
                                </div>
                                <div className={`flex ${showSide ? "text-white transition ease-in duration-300 delay-300 row-span-2" : "text-white/0"} cursor-pointer overflow-hidden`}>{showSide && "Best Hands"}</div>
                            </div>
                        }
                        { (componentToShow == "" || componentToShow == "") &&
                            <div className="flex flex-row">
                                <div className={`flex cursor-pointer`}>
                                    <img className="h-auto w-[40px] mr-4 ml-4" src='/Images/CardsIcons.png'/>
                                </div>
                                <div className={`flex ${showSide ? "text-white transition ease-in duration-300 delay-300 row-span-2" : "text-white/0"} cursor-pointer overflow-hidden`}>{showSide && "Best Hands"}</div>
                            </div>
                        }
                        </div>
                    </div>
                    <div className="h-full overflow-auto">
                        {showSide && comp[componentToShow]}
                    </div>
                </div>
                {children}
            </div>
            
        </div>)
        
}