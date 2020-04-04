import React, { useState} from "react";
import styled from 'styled-components'

const TextArea = styled.textarea`
    width:100%;
    margin-bottom: 1rem;
`

const ConvertCase = () => {

const [count, setCount] = useState(0)

const [count2, setCount2] = useState(0)

const [count3, setCount3] = useState(1)



function incrementText() {
    //count characters
    const count = document.getElementById("principal-text").value.length;
    setCount(count)

    //count Word Count
    const count2 = document.getElementById("principal-text").value
    if(count2 === ""){
        const wordCount = 0
        setCount2(wordCount)
    }
    else{
        const wordCount = count2.match(/(\w+)/g).length;
        setCount2(wordCount)
    }

    //const Count line
    const count3 =  document.getElementById("principal-text").value
    const lineCount = count3.split('\n').length;
    setCount3(lineCount)
}



return (
    <>
        <h1 className="text-center">Online Converter</h1>
        
        <TextArea
        onChange={incrementText}
        rows="10" 
        id="principal-text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none" placeholder="Type or paste your content here"/>

        <div className="grid grid-cols-5 gap-4">
            <button 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                Sentece case
            </button>

            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                lower case
            </button>
            
            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                UPPER CASE
            </button>

            <button 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                Capitalized Case
            </button>
            
            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                aLtErNaTiNg cAsE
            </button>
            
            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                Title Case
            </button>
            
            <button 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                InVeRsE CaSe
            </button>
            
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download Text</span>
            </button>

            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                Copy to Clipboard
            </button>
            
            <button
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                Clear
            </button>
        </div>

        <p className="text-center pt-8">Character Count: {count} | Word Count: {count2} | Line Count: {count3} </p>
    </>
    );
}

export default ConvertCase;