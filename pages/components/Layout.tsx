import { Header } from "./Header"

export const Layout = ({children} :any) => {
    return(<div className="min-h-[100vh] w-full">
            <Header/>
            {children}
        </div>)
        
}