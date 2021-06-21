///promise
function getData(uId) 
{
    return new Promise((resolve,reject)=>
    { setTimeout(() => 
        {console.log("Fetched the data!");
            resolve( "skc@gmail.com");
        }, 4000);
    })
};
        
console.log("start");
getData("skc").then(res=>
    {var email = res;
     console.log("Email id of the user id is: " + email);
    });
console.log("end")

//async/await 1
function getData(uId) 
{
    return new Promise((resolve,reject)=>
    { setTimeout(() => 
        {console.log("Fetched the data!");
            resolve( "skc@gmail.com");
        }, 4000);
    })
};
        
console.log("start");
(async function fun(){
var email =await getData("skc");
console.log("Email id of the user id is: " + email);
    })();
console.log("end")

//async/await 2(not working)
async function getData(uId) 
{
    setTimeout(() => 
        {console.log("Fetched the data!");
            return( "skc@gmail.com");
        }, 4000);
    
};
        
console.log("start");
async function fun(){
var email =await getData("skc");
console.log("Email id of the user id is: " + email);
    };
fun();
console.log("end")

//not working
function getData(uId) {
setTimeout(() => {
console.log("Fetched the data!");
return "skc@gmail.com";
}, 4000);
}

console.log("start");
async function fun()
{

var email = await new Promise( ( resolve, reject) => {resolve(getData("skc"));});
console.log("Email id of the user id is: " + email);
}
fun();
console.log("end");