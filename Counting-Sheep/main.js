

function countingSheep()
{
    arrayOfSheep =['true','false','true','false','true','false','true','false','true','false']
    let counter=0
    arrayOfSheep.map((x)=>{
        if(x===true)
        counter++
    })

 return counter
}
