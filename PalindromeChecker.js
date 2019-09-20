function palindrome(str) 
{

    let lowercased = str.toLowerCase()
	//console.log(lowercased);

	let noSpecialChar = lowercased.replace(/[^a-z0-9]/g, "");
	//console.log(noSpecialChar);

	let splitted = noSpecialChar.split("");
	//console.log(splitted);

	let reversed = splitted.reverse();
	//console.log(reversed);

	let joined = reversed.join("");
	console.log(joined);

	if (noSpecialChar === joined)
    {
		return true;
	}
	else
    {
		return false;
    }

}
  
palindrome("eye");
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");