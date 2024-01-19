function devolverboton(i,j)
{
    return document.getElementById(i+"_"+j)
}

let botono = null

console.log("XD")

function botoncarsi(i, j) 
{
    console.log("Hizo Click en", i, j);
    
    botono = devolverboton(i, j);
    
    let idbotono = i + "_" + j;
}

 main()

