import React, { useState } from 'react';
import styled from 'styled-components'

const TextArea = styled.textarea`
  width:100%;
  margin-bottom: 1rem;
`
const Button = styled.button`
  background: #4339F2;
  color: #fff;
  margin: 10px;

  &:hover{
    background: #766ff6;
    color: black;
  }
`

const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 15px;
`

const Span = styled.span`
  font-weight: bold;
`

const Home = () => {

  const [count, setCount] = useState(0)

  const [count2, setCountWords] = useState(0)

  const [count3, setCountLines] = useState(1)

  /* Clear TextBox */
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

  /* Function download */
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

  /* upper case */
  function upperCase(){
      const text = document.getElementById("principal-text").value
      const res = text.toUpperCase();
      document.getElementById("principal-text").value = res;
  }

  /* lower case */
  function lowerCase(){
      const text = document.getElementById("principal-text").value
      const res = text.toLowerCase();
      document.getElementById("principal-text").value = res;
  }

  /*sentenceCase*/
  function sentenceCase(){
      const text = document.getElementById("principal-text").value
      const res = text.charAt(0).toUpperCase() + text.slice(1);
      document.getElementById("principal-text").value = res;
  }

  /* Capitalize Case */
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
    }
  }

  /* Alternating Case */
  function alternatingCase() {
      const text = document.getElementById("principal-text").value;
      var chars = text.toLowerCase().split("");
      for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
      }
      document.getElementById("principal-text").value = chars.join("");
    };

  /* Inverse Case */
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

  /* Inverse incrementText */
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
      <Container>
      <h1 className="text-center">Welcome to the Online Text Converter</h1>
        
        <div className="row d-flex justify-content-center">
            <div className="col-11">
              <TextArea
                  onChange={incrementText}
                  rows="10" 
                  id="principal-text"
                  className="shadow appearance-none border rounded" 
                  placeholder="Type or paste your content here and choose the case you want to convert it to"
              />
            </div>
  
            <div className="col-12">
              <div className="row text-center">
                <div className="col-12">
                  <Button 
                      onClick={sentenceCase}
                      className="btn">
                      Sentece case
                  </Button>
  
                  <Button
                      onClick={lowerCase}
                      className="btn">
                      lower case
                  </Button>
                  
                  <Button
                      onClick={upperCase}
                      className="btn">
                      UPPER CASE
                  </Button>
  
                  <Button
                      onClick={capitalizeCase}
                      className="btn">
                      Capitalized Case
                  </Button>
                  
                  <Button
                      onClick={alternatingCase}
                      className="btn"
                  >
                      aLtErNaTiNg cAsE
                  </Button>
                </div>
  
                <div className="col-12">                  
                  <Button
                    onClick={capitalizeCase}
                    className="btn"
                    >
                    Title Case
                  </Button>
                  
                  <Button 
                    onClick={inverseCase}
                    className="btn"
                    >
                    InVeRsE CaSe
                  </Button>
                  
                  <Button
                    onClick={download} 
                    className="btn"
                    >
                    <i className="fa fa-download"></i>
                    <span> Download Text</span>
                  </Button>
  
                  <Button
                    onClick={copyClipboard}
                    className="btn"
                    >
                    Copy to Clipboard
                  </Button>
                  
                  <Button
                    onClick={clearBox}
                    className="btn"
                    >
                    Clear
                  </Button>
                </div>
              </div>
            </div>
          </div>
  
        <p className="text-center"><Span>Character Count:</Span> {count} | <Span>Word Count:</Span> {count2} | <Span>Line Count:</Span> {count3} </p>
      </Container>
    </>
    );
}
export default Home;