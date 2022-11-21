function SquareOrNot(array)
{
  return  array.map((num)=>
    Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num): num*num
      )
}

console.log(SquareOrNot([4,1,7,25,36]));