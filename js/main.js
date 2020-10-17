'use strict';
{

function setWord() {
  word =  words.splice(Math.floor(Math.random() * words.length), 1)[0];  //ランダムな数字を重複しないようにとる
  target.textContent = word;
  loc = 0;
}

const words = [
  'red',
  'blue',
  'green',
  'yellow',
  'pink',
  'orange',
  'skyblue',
];

let word; //最初の文字
let loc = 0; //location

const target = document.getElementById('target');

setWord();

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;  //間違っていたときの処理
    } 
    
    loc++;

    target.textContent = '_'.repeat(loc) + word.substring(loc);  //repeatは繰り返す  //substringは()以降の文字を取り出してくれる
    

    if (loc === word.length) {
      if (words.length === 0) {
        const result = document.getElementById('result');
        result.textContent = "finished!";
        return;
      }
    
      setWord();
    }
   
  });
}