function deletDouble(element)
{
    var outputArr = []; 
    var count = 0; 
    var start = false; 
            
    for (let i = 0; i < element.length; i++) 
    { 
        for (let j = 0; j < outputArr.length; j++) 
        { 
            if ( element[i] == outputArr[j] ) 
            { 
                start = true; 
            }		
        } 
        count++; 
        if (count == 1 && start == false) 
        { 
            outputArr.push(element[i]); 
        } 
            start = false; 
            count = 0; 
    } 
    return outputArr;
}

function uniteUnique() 
{
	let element = [];
	
	for (let arg = 0; arg < arguments.length; ++arg)
    {
        let arr = arguments[arg];

        for (let i = 0; i < arr.length; ++ i)
        {
			 element.push(arr[i]);
			 //console.log(element);
        } 
    }
    return deletDouble(element);

}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
//uniteUnique([1, 2, 3], [5, 2, 1]);
//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

