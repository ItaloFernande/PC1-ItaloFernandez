function devolverboton(i,j)
{
    return document.getElementById(i+"_"+j)
}

let botono = null
let botonoT = null
let botonoB = null
let botonoL = null
let botonoR = null


function botoncarsi(i, j) 
{
    botono = devolverboton(i, j);
    botonoT = devolverboton((1+i), j);
    botonoB = devolverboton((i-1), j);
    botonoL = devolverboton(i, (j-1));
    botonoR = devolverboton(i, (1+j));

    botono.innerHTML = "X";
    if(botonoT)
    {
        botonoT.innerHTML = "X";
    }

    if(botonoB)
    {
        botonoB.innerHTML = "X";
    }

    if(botonoL)
    {
        botonoL.innerHTML = "X";
    }

    if(botonoR)
    {
        botonoR.innerHTML = "X";
    }

    
    

    
    
    
    

}

 main()

