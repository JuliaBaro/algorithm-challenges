function charIsLMsign(str)
{
    if (str.match(/(<>)/))
	{
        return str.replace((/(<>)/), "&lt;&gt;"); 
    } 
    if (str.match(/>/g))
    {
        return str.replace((/>/g), "&gt;");
    }   
    else if (str.match(/</g))
    {
        return str.replace((/</g), "&lt;");
    }
    return str;
}

function charIsQuote(str)
{
let res;

    if (str.match(/"/g))
    {
		res = str.replace(/"/g, "&quot;")
		return res;
    }
    return str;

}

function charIsAndAp(str) 
{
    let res;

    if (str.match(/&/g))
    {
        res = str.replace(/&/g, "&amp;");
        return res;
    }
    else if (str.match(/'/g))
    {
        res = str.replace(/'/g, "&apos;");
        return res;
    }
    return str;
}

function convertHTML(str)
{
    if (str.match(/(<>)/) || str.match(/>/g) || str.match(/</g))
    {
        return charIsLMsign(str);
    }
    else if (str.match(/"/g))
    {
        return charIsQuote(str);
    }
    else if (str.match(/&/g) || str.match(/'/g))
    {
        return charIsAndAp(str);
    }
    return str;
}

convertHTML("Dolce & Gabbana");
//convertHTML("Hamburgers < Pizza < Tacos");
//convertHTML("Sixty > twelve");
//convertHTML('Stuff in "quotation marks"');
//convertHTML("Schindler's List");
//convertHTML("<>");
//convertHTML("abc");