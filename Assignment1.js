
//Question 1
function reverseString(string,reverse)
{
    if(string.length<=1)
        return string;
    else
        return reverse(string);
}

console.log(reverseString("adi",function(str){
    let rev="";
    for(var i=0;i<str.length;i++)
    {
        rev=str[i]+rev;
    }
    return rev;
}))

//Question 2
var arrow=(firstName,lastName)=> firstName[0]+lastName[0];

console.log(arrow("adi","var"));

