var Person = function(firstAndLast) 
{
  let first = firstAndLast.split(" ")[0];
  //console.log(first);
  let last = firstAndLast.split(" ")[1];
  //console.log(last);

  this.getFirstName = function()
  {
    return first;
  }

  this.getLastName = function()
  {
    return last;
  }

  this.getFullName = function()
  {
    return first + " " + last;
  }

  this.setFirstName = function(str)
  {
    first = str;
  }

  this.setLastName = function(str)
  {
    last = str;
  }

  this.setFullName = function(str)
  {
    first = str.split(" ")[0];
    last = str.split(" ")[1];
  }

};

var bob = new Person('Bob Ross');
bob.getFullName();

