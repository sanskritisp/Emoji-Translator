
import "./style.css";
import { useState } from "react";
import {emojiDictionary} from "./dict";



var emojiWeHave = Object.keys(emojiDictionary);

function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    if (meaning === undefined) {
      meaning = emoji + "we do not have this emoji in our database";
    }
    else{
      meaning = emoji+ "  means : "+ meaning;
    }
    setMeaning(meaning);
  }

return (
     <div className="App">
      <h1>EMOJI TRANSLATOR</h1>
      
      <h2>Enter the emoji to see it's meaning</h2>
<div id="emoticons">
      <input onChange={(e) => emojiInputHandler(e.target.value)}></input></div>
      <h3>{meaning}</h3>
      <h2>Emoji that we have:</h2>
      <div>
        {" "}
        {emojiWeHave.map((emoji) => {
          return (
            <span
              onClick={() => {
                emojiInputHandler(emoji);
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}


export default App;
