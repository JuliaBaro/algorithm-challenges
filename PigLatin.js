function onlyCons(str)
{
    if (!str.match(/[aeiou]/))
    {
        let res;
        res = str + "ay";
        //console.log(res);
		return res;
    }
}

function onlyLastCharVow(str)
{

    let withoutLastChar = str.substring(0, str.length-1);
    let onlyLastChar = str.slice(-1);

    if (!withoutLastChar.match(/[aeiou]/) && onlyLastChar.match(/[aeiou]/))
    {
        let res;
        res = onlyLastChar + withoutLastChar + "ay";
        //console.log(res);
        return res;
    }
}

function startsWithVow(str) 
{
    let resVowel;
    
    if (str.charAt(0).match(/[aeiou]/))
    {
        resVowel = str + "way";
	    //console.log(resVowel);
    	return resVowel;
    }
}

function startsWithConsts(str)
{
	if (!str.charAt(0).match(/[aeiou]/))
    {
		let onlyFirstChar = str.slice(0, 1);
		let withoutFirstNewStr = str.slice(1);
		let newStr = withoutFirstNewStr + onlyFirstChar
		if (!newStr.charAt(0).match(/[aeiou]/))
        {	
			return startsWithConsts(newStr);
        }
		else
        {
		//console.log(newStr + "ay");
		return (newStr + "ay");
        }
	}
return(str);
}

function translatePigLatin(str) 
{
    //debugger;

    let withoutLastChar = str.substring(0, str.length-1);
    let onlyLastChar = str.slice(-1);

    if (!str.match(/[aeiou]/))
    {
        return onlyCons(str);
    }
    else if (!withoutLastChar.match(/[aeiou]/) && onlyLastChar.match(/[aeiou]/))
    {
        return onlyLastCharVow(str);
    }
    else if (str.charAt(0).match(/[aeiou]/))
    {
        return startsWithVow(str);
    }
    else if (!str.charAt(0).match(/[aeiou]/))
    {
        return startsWithConsts(str);
    }
}
 
//translatePigLatin("california");
//translatePigLatin("algorithm");
//translatePigLatin("paragraphs");
translatePigLatin("glove");
//translatePigLatin("eight");
//translatePigLatin("the");
//translatePigLatin("thlgp");