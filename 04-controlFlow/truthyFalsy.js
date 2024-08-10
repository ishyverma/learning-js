const userEmail = "s@gmail.com";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

/* 

false => falsy value
0 => falsy value
-0 => falsy value
0n/BigInt(0) => falsy value
null => falsy value
undefined => falsy value
NaN => false value
"" => falsy value

*/


/*

"0" => truthy value
"false" => truthy value
" " => truthy value
[] => truthy value
{} => truthy value
function() {} => truthy value


*/


// Nullish Coalescing Operator (??): null, undefined
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15
val1 = null ?? undefined
console.log(val1); // Returns undefined.


// Terniary Operator

// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("Less than 80"): console.log("More than 80");