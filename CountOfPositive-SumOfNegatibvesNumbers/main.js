

function print(arr)
{
 let positivesArray=[];
 let sumNegatives=0;
  for (let index = 0; index < arr.length; index++) {
    if(arr[index] >0)
    {
        positivesArray.push(arr[index])
    }
    else
    {
        sumNegatives+=arr[index]
    }
  }
  return [positivesArray,sumNegatives]
}

console.log(print([1,2,3,4,5,6,7,-5,-2]));