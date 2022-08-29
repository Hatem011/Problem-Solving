
function SumWithoutHeighestLowerNumber(arr)
{
if(arr==null) return 0;
    let HighNum=Math.max(...arr)
    let LowerNum=Math.min(...arr)
   let filteredArray=arr.filter((num)=> num!==HighNum && num!==LowerNum)
   let newArray=filteredArray.reduce((sum,num)=> sum+=num)
   return newArray
}
console.log(SumWithoutHeighestLowerNumber([1,2,3,4,5,6,9]));