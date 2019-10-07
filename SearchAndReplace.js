function replace(str, before, after)
{
    var res = str.replace(before, after);
    console.log(res);
    return res;
}

function myReplace(str, before, after) 
{

    if (before.charAt(0).match(/[A-Z]/))
    {
        let res = after.charAt(0).toUpperCase() + after.slice(1);
        //return res;
		return replace(str, before, res);
    }
	
    return replace(str, before, after);
}
  
//myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//myReplace("Let us go to the store", "store", "mall");
//myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
//myReplace("This has a spellngi error", "spellngi", "spelling");
//myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms");