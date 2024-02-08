/*function signature/sample */
function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return "Please Provide an arry"
    }

    let validArray = [];
    for( let num of array ){
        if(typeof num == "number"  && !isNaN(num)){
            validArray.push(num);
        }
    }
    return validArray;
    }

    console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))