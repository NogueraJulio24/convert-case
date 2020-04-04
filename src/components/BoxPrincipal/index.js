import React from "react";
import ConvertCase from "../Convert/index";

const Card = () => {
    return(
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="rounded-lg border shadow-lg p-10 m-8 bg-white">
                    < ConvertCase />
                </div>
            </div>
        </>
    )
}

export default Card;