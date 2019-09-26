let alph = "abcdefghijklmnopqrstuvwxyz";

function containsAllLetters(str)
{
    if (str == alph)
    {
      return undefined;
    }
      return str; 
}

function fearNotLetter(str) 
{
    if (str == alph)
    {
      return containsAllLetters(str);
    }

    let cuttedStart;
    let splitted;
    
    for (let i = 0; i < alph.length; i++)
    {
        if (str.charAt(0) == alph[i])
        {
            cuttedStart = alph.split(alph[i-1]).pop();
            //console.log(cuttedStart);
        }
    }

    for (let i = 0; i < cuttedStart.length; i++)
    {
        if (str.slice(-1) == cuttedStart[i])
        {
            splitted = cuttedStart.split(cuttedStart[i+1]);
            //console.log(splitted);
        }
    }
    
    let alphFragment = splitted[0];
    //console.log(alphFragment);

let i = 0;
let j = 0;
let res = "";

    while (j < alphFragment.length)
    {
        if (str[i] != alphFragment[j] || i == str.length)
            res += alphFragment[j];
        else
        i++;
        j++;
    }
    return res;
}

//fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
///fearNotLetter("stvwx");
///fearNotLetter("bcdf");
//fearNotLetter("abcdefghijklmnopqrstuvwxyz");