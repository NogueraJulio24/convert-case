import React from "react";
import ConvertCase from "../Convert/index";
import AdicionalInformation from "../AdicionalInformation/index"
import Footer from "../Footer/index"

const Card = () => {
    return(
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="rounded-lg border shadow-lg p-10 m-8 bg-white">
                    < ConvertCase />
                </div>
            </div>
            <div className="flex-none text-center px-10 py-2 m-8">
                <AdicionalInformation />
            </div>
            <div className="flex-none text-center px-10 py-2 m-8">
                <Footer />
            </div>
        </>
    )
}

export default Card;