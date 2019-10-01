function diffArray(arr1, arr2) 
{
    let uniques = [];

    for (let i = 0; i < arr1.length; i++)
    {
        if (arr2.indexOf(arr1[i]) === -1)
        {
            uniques.push(arr1[i]);
        }
    }

    for (let j = 0; j < arr2.length; j++)
    {
        if (arr1.indexOf(arr2[j]) === -1)
        {
            uniques.push(arr2[j]);
        }
    }
    return uniques;
}
  
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) 