'use client'

import { PuffLoader } from "react-spinners"

const Loader  = () =>{
    return (
        <div className="mt-28 h-[70vh] flex flex-col justify-center items-center">

            <PuffLoader
               size ={100}
               color= "red"
            />

        </div>
    )
}


export default Loader