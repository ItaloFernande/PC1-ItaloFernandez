function devolverboton(i,j)
{
    return document.getElementById(i+"_"+j)
}

let botono = null
let botonoT = null
let botonoB = null
let botonoL = null
let botonoR = null

console.log("XD")

function botoncarsi(i, j) 
{
    console.log("Hizo Click en", i, j);

    botono = devolverboton(i, j);
    botonoT = devolverboton((1+i), j);
    botonoB = devolverboton((i-1), j);
    botonoL = devolverboton(i, (j-1));
    botonoR = devolverboton(i, (1+j));
    
    let idbotono1 = i + "_" + j;
    let idbotonoT = i + "_" + (1+j);
    let idbotonoB = i + "_" + (j-1);
    let idbotonoL = (i-1) + "_" + j;
    let idbotonoR = (i+1) + "_" + j;


    botono.innerHTML = "X";
    botonoT.innerHTML = "X";
    botonoB.innerHTML = "X";
    botonoL.innerHTML = "X";
    botonoR.innerHTML = "X";

}

 main()

