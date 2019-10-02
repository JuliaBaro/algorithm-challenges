function addOdds(fibNums, num)
{
    let sum = 0;

    for (let i = 0; i < fibNums.length; i++)
    {
        if (fibNums[i] % 2 !== 0)
        {
            sum = sum + fibNums[i]
        }
    }
    return sum;
}

function calculateArray(fibNums, num)
{
	let firstNum = fibNums[fibNums.length-2];
    let secondNum = fibNums[fibNums.length-1];
    let sum = firstNum + secondNum
    if (sum <= num)
    {
        fibNums.push(sum);
        return calculateArray(fibNums, num);
    }
    else
    {
        return fibNums;
    }
}

function sumFibs(num) 
{
    //debugger;
    let fibNums = [1, 1];
    let ujFibnums=calculateArray(fibNums, num);
   
    return addOdds(ujFibnums, num);
}

sumFibs(1) //should return a number.
sumFibs(1000) //should return 1785.
sumFibs(4000000) //should return 4613732.
sumFibs(4) //should return 5.
sumFibs(75024) //should return 60696.
sumFibs(75025) //should return 135721.
