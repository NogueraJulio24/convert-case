import React, { useState} from "react";
import styled from 'styled-components'

const TextArea = styled.textarea`
    width:100%;
    margin-bottom: 1rem;
`

const ConvertCase = () => {

const [count, setCount] = useState(0)

const [count2, setCountWords] = useState(0)

const [count3, setCountLines] = useState(1)

// Clear TextBox
function clearBox(){
    const textBox  = document.getElementById("principal-text").value
    if (textBox != null){
        document.getElementById("principal-text").value = ""
        setCount(0)
        setCountWords(0)
        setCountLines(1)
    }    
}

/* Copy Clipboard*/

function copyClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("principal-text");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  }

// Function download
function download() {
    const text = document.getElementById("principal-text").value;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "Online-converter");
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }

//UPPER CASE
function upperCase(){
    const text = document.getElementById("principal-text").value
    const res = text.toUpperCase();
    document.getElementById("principal-text").value = res;
}

//lower case
function lowerCase(){
    const text = document.getElementById("principal-text").value
    const res = text.toLowerCase();
    document.getElementById("principal-text").value = res;
}

//sentenceCase
function sentenceCase(){
    const text = document.getElementById("principal-text").value
    const res = text.charAt(0).toUpperCase() + text.slice(1);
    document.getElementById("principal-text").value = res;
}

//Capitalize Case
function capitalizeCase() {
	try {
		const text = document.getElementById("principal-text").value
    if (text !== ""){
        const sentence = text.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
           sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }   
        document.getElementById("principal-text").value = sentence.join(" ");
    }else{
        document.getElementById("principal-text").value = ""
		}
	}
	catch(error) {
		console.error(error);
		// expected output: ReferenceError: nonExistentFunction is not defined
		// Note - error messages will vary depending on browser
	}
}

//Alternating Case
function alternatingCase() {
    const text = document.getElementById("principal-text").value;
    var chars = text.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    document.getElementById("principal-text").value = chars.join("");
  };

//Inverse Case
function inverseCase(){
	try{
    const letters = document.getElementById("principal-text").value
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else {
            newLetters += letters[i].toLowerCase();
        }
    }
    document.getElementById("principal-text").value = newLetters
	}catch(error){
		console.log(error)
	}
}
  
function incrementText() {
	try{
		//count characters
		const count = document.getElementById("principal-text").value.length;
		setCount(count)

		//count Word Count
		const count2 = document.getElementById("principal-text").value
		if(count2 === ""){
				const wordCount = 0
				setCountWords(wordCount)
		}
		else{
				const wordCount = count2.match(/(\w+)/g).length;
				setCountWords(wordCount)
		}

		//const Count line
		const count3 =  document.getElementById("principal-text").value
		const lineCount = count3.split('\n').length;
		setCountLines(lineCount)
		}catch(error) {
			console.error(error);
		// expected output: ReferenceError: nonExistentFunction is not defined
		// Note - error messages will vary depending on browser
	}
}  

return (
    <>
        <h1 className="text-center font-bold text-3xl mb-1">Welcome to the Online Text Converter</h1>
        
        <TextArea
        onChange={incrementText}
        rows="10" 
        id="principal-text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-none" placeholder="Type or paste your content here and choose the case you want to convert it to"/>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <button 
                onClick={sentenceCase}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                Sentece case
            </button>

            <button
                onClick={lowerCase}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                lower case
            </button>
            
            <button
                onClick={upperCase}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                UPPER CASE
            </button>

            <button
                onClick={capitalizeCase}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                Capitalized Case
            </button>
            
            <button
                onClick={alternatingCase}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                aLtErNaTiNg cAsE
            </button>
            
            <button
                onClick={capitalizeCase}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                Title Case
            </button>
            
            <button 
                onClick={inverseCase}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                InVeRsE CaSe
            </button>
            
            <button
                onClick={download} 
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download Text</span>
            </button>

            <button
                onClick={copyClipboard}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                Copy to Clipboard
            </button>
            
            <button
                onClick={clearBox}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow focus:outline-none">
                Clear
            </button>
        </div>

        <p className="text-center pt-8">Character Count: {count} | Word Count: {count2} | Line Count: {count3} </p>
    </>
    );
}

export default ConvertCase;