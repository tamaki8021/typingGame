'use strict';
{
const word = 'red'; //最初の文字
let loc = 0; //location

const target = document.getElementById('target');
target.textContent = word;

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;  //間違っていたときの処理
    } 

    loc++;

    target.textContent = '_'.repeat(loc) + word.substring(loc);  //repeatは繰り返す  //substringは()以降の文字を取り出してくれる
  });
}