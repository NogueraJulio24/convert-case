import React from 'react';

const AdicionalInformation = () => {
  return(
    <>
      <div class="grid grid-cols-2">
        <div>
          <h2 className="font-bold text-2xl mb-2">Sentence case</h2>
          <p className="text-gray-700 text-base lead text-center mb-3">Capitalize the first letter of the first word of the text.
          </p>
          <h3 className= "text-center">Example:</h3>
            <p className="text-gray-700 text-base lead text-center">Normal text: hello world</p>
            <p className="text-gray-700 text-base lead text-center mb-24">Sentence case: <strong className= "text-red-600">H</strong>ello world</p>
        </div>



        <div>
          <h2 className="font-bold text-2xl mb-2">Lower case</h2>
          <p className="text-gray-700 text-base lead text-center mb-3">Transforms all the letters in your text into lowercase letters.</p>

          <h3 className= "text-center">Example:</h3>
            <p className="text-gray-700 text-base lead text-center">Normal text: Hello WORLD</p>
            <p className="text-gray-700 text-base lead text-center mb-12">Lower case: <strong className= "text-red-600">hello world</strong></p>
        </div>



        <div>
          <h2 className="font-bold text-2xl mb-2">Upper case</h2>
          <p className="text-gray-700 text-base lead text-center mb-3">Transforms all the letters in your text into uppercase letters.</p>

          <h3>Example:</h3>
            <p className="text-gray-700 text-base lead text-center">Normal text: hello world</p>
            <p className="text-gray-700 text-base lead text-center mb-24">Upper case: <strong className= "text-red-600">HELLO WORLD</strong></p>
        </div>

        <div>
          <h2 className="font-bold text-2xl mb-2">Capitalized case</h2>
          <p className="text-gray-700 text-base lead text-center mb-3">Transforms the first letter of each word to uppercase.</p>

          <h3>Example:</h3>
            <p className="text-gray-700 text-base lead text-center">Normal text: hello world</p>
            <p className="text-gray-700 text-base lead text-center mb-12">Capitalized case: <strong className= "text-red-600">H</strong>ello <strong className= "text-red-600">W</strong>orld</p>
        </div>


        <div>
          <h2 className="font-bold text-2xl mb-2">Alterating case</h2>
          <p className="text-gray-700 text-base lead text-center mb-3">Toggles the letters of a word between upper and lower case.</p>

          <h3>Example:</h3>
            <p className="text-gray-700 text-base lead text-center">Normal text: hello world</p>
            <p className="text-gray-700 text-base lead text-center mb-24">Alterating case: <strong className= "text-red-600">H</strong>e<strong className= "text-red-600">L</strong>l<strong className= "text-red-600">O</strong> <strong className= "text-red-600">W</strong>o<strong className= "text-red-600">R</strong>l<strong className= "text-red-600">D</strong></p>
        </div>


        <div>
          <h2 className="font-bold text-2xl mb-2">Title case</h2>
          <p className="text-gray-700 text-base lead text-center mb-3">Capitalize the first letter of each word</p>

          <h3>Example:</h3>
            <p className="text-gray-700 text-base lead text-center">Normal text: hello world</p>
            <p className="text-gray-700 text-base lead text-center mb-12">Capitalized case: <strong className= "text-red-600">H</strong>ello <strong className= "text-red-600">W</strong>orld</p>
        </div>

        <div>
          <h2 className="font-bold text-2xl mb-2">Inverse case</h2>
          <p className="text-gray-700 text-base lead text-center mb-3">Toggles the letters of a word between lowercase and uppercase.</p>

          <h3>Example:</h3>
            <p className="text-gray-700 text-base lead text-center">Normal text: HeLlO</p>
            <p className="text-gray-700 text-base lead text-center mb-24">Alterating case: h<strong className= "text-red-600">E</strong>l<strong className= "text-red-600">L</strong>o</p>
        </div>

        <div>
          <h2 className="font-bold text-2xl mb-2">Download text</h2>
          <p className="text-gray-700 text-base lead text-center mb-3">Lets you download the created text</p>
        </div>

        <div>
          <h2 className="font-bold text-2xl mb-2">Copy de clipboard</h2>
          <p className="text-gray-700 text-base lead text-center mb-24">You can copy the created text</p>
        </div>

        <div>
          <h2 className="font-bold text-2xl mb-2">Clear</h2>
          <p className="text-gray-700 text-base lead text-center mb-24">Delete the created text</p>
        </div>


        <div>
          <h2 className="font-bold text-2xl mb-2">Character count</h2>
          <p className="text-gray-700 text-base lead text-center mb-3">Counts the characters of the created text</p>
        </div>


        <div>
          <h2 className="font-bold text-2xl mb-2">Word count</h2>
          <p className="text-gray-700 text-base lead text-center mb-3">Count the words of the created text</p>
        </div>
      </div>
    </>
  );
}
export default AdicionalInformation