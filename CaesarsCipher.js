function rot13(str) 
{ 
  let arrOfTranslation = [];

  let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let alph13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'];

  for (let i = 0; i < str.length; i++)
  {
  if (!str[i].match(/^[a-z]/i))
    {
      arrOfTranslation.push(str[i]);
    }
    for (let j = 0; j < alph.length; j++)
    {
      if (str[i] == alph[j])
      {
        let indexOfAlphLetter = alph.indexOf(alph[j]);
        for (let k = 0; k < alph13.length; k++)
        {
          if (indexOfAlphLetter == alph13.indexOf(alph13[k]))
          {
            arrOfTranslation.push(alph13[k]);
          }
        }
      }
    }
  }
let res = arrOfTranslation.join("");
console.log(res);
return res;

}

//rot13("SERRPBQRPNZC") //should decode to FREE CODE CAMP
rot13("SERR PBQR PNZC") //should decode to FREE CODE CAMP
rot13("SERR CVMMN!") //should decode to FREE PIZZA!
rot13("SERR YBIR?") //should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") //should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.