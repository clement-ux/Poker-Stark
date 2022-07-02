import React from "react"
import { tw } from "tailwindcss"
import { Header } from "./Header.js"

export const Layout = (props) => {

    return (

        <div>
            <Header />
            {props.children}

        </div>


    )


}