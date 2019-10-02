function addTogether() 
{
  let checkIfNum = function(num)
  {
    if (typeof num !== 'number')
    {
      return undefined;
    }
    else
    {
      return num;
    }
  };

  if (arguments.length > 1)
  {
    let inp1 = checkIfNum(arguments[0]);
    let inp2 = checkIfNum(arguments[1]);
    if (inp1 === undefined || inp2 === undefined)
    {
      return undefined;
    }
    else 
    {
      return inp1 + inp2;
    }
  }
  else
  {
    var c = arguments[0];
    if (checkIfNum(c)) 
    {
      return function(arg2) 
      {
        if (c === undefined || checkIfNum(arg2) === undefined) 
        {
          return undefined;
        } 
        else 
        {
          return c + arg2;
        }
      };
    }
  }
}

addTogether(2, 3) //should return 5.
addTogether(2)(3) //should return 5.
addTogether("http://bit.ly/IqT6zt") //should return undefined.
addTogether(2, "3") //should return undefined.
addTogether(2)([3]) //should return undefined.
