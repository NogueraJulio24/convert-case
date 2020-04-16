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




























      {/* <section>

        <h1 className="font-bold text-xl mb-1">Welcome to the Online Text Converter</h1>
        <p className="text-gray-700 text-base">Online Text Converter is an online tool where you can change your text between lowercase and uppercase</p>

        <h2 className="font-bold text-xl mb-2">Sentence Case</h2>
        <p className="text-gray-700 text-base">The sentence case converter will allow you to paste any text you’d like, and it will automatically transform it to a fully formed structured sentence.</p>

        <p className="text-gray-700 text-base">It works by capitalizing the very first letter in each sentence, and will then go on to transform the rest of the text into lowercase as well as converting i’s into I’s. Every letter after a full stop will get converted into an upper case letter.</p>

        <p className="text-gray-700 text-base">Note: it won’t, however, capitalize names or places.</p>

        <p className="text-gray-700 text-base italic">This is an example of sentence case.</p>

        <h2 className="font-bold text-xl mb-2">Lower Case</h2>
        <p className="text-gray-700 text-base">If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.</p>

        <p className="text-gray-700 text-base italic">this is an example of lower case.</p>

        <h2 className="font-bold text-xl mb-2">Upper Case</h2>
        <p className="text-gray-700 text-base">The upper case transformer will take any text that you have and will generate all the letters into upper case ones. It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).</p>

        <p className="text-gray-700 text-base">To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.</p>

        <p className="text-gray-700 text-base italic">THIS IS AN EXAMPLE OF UPPER CASE.</p>

        <h2 className="font-bold text-xl mb-2"> Capitalized Case</h2>
        <p className="text-gray-700 text-base">The capitalized case converter will automatically convert the starting letter of every word into an upper case and will leave the remaining letters as lower case ones.</p>

        <p className="text-gray-700 text-base">Simply copy the content that you will like to generate into this format, then paste into the box form above and select the Capitalized Case tab.</p>

        <p className="text-gray-700 text-base italic">This Is An Example Of Capitalized Case.</p>

        <h2 className="font-bold text-xl mb-2">Alternating Case</h2>
        <p className="text-gray-700 text-base">The alternating case converter will allow you to transform your text (no matter the current format) into text that alternates between lower case and upper case. It will generate a capital letter and then a lower case letter within the same word.</p>

        <p className="text-gray-700 text-base italic">tHiS Is aN ExAmPlE Of aLtErNaTiNg cAsE.</p>

        <h2 className="font-bold text-xl mb-2">Title Case</h2>
        <p className="text-gray-700 text-base ">The title case converter is perfect for those who are a bit unsure on how to title an upcoming essay. It essentially ensures the correct letters are capitalized within the context of a title. Words such as “an” will be left all in lower case and words that are important will be converted such as “Title”.</p>
      </section> */}
    </>
  );
}
export default AdicionalInformation