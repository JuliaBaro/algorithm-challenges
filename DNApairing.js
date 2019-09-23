function pairElement(str) 
{
    let pairArr = [];

    for (let i = 0; i < str.length; i++)
    {
        if (str[i].match("A"))
        {
            pairArr.push(["A", "T"]);
        }
        else if (str[i].match("T"))
        {
            pairArr.push(["T", "A"]);
        }
        else if (str[i].match("C"))
        {
            pairArr.push(["C", "G"]);
        } 
        else if (str[i].match("G"))
        {
            pairArr.push(["G", "C"]);
        }
    } 
    //console.log(pairArr);
    return pairArr;

//let res = mainArr.push(pairArr);
//console.log(res);
}
  
pairElement("GCG");
//pairElement("ATCGA");
    //[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
//pairElement("TTGAG");
    //[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
//pairElement("CTCTA");
    //[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]