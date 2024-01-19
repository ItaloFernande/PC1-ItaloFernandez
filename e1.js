function devolverboton(i,j)
{
    return document.getElementById(i+"_"+j)
}

let botono = null
let botonoT = null
let botonoB = null
let botonoL = null
let botonoR = null

let botonoiz = null
let botonoTiz = null
let botonoBiz = null
let botonoLiz = null
let botonoRiz = null


function botoncarsi(i, j) 
{
    botono = devolverboton(i, j);
    botonoT = devolverboton((1+i), j);
    botonoB = devolverboton((i-1), j);
    botonoL = devolverboton(i, (j-1));
    botonoR = devolverboton(i, (1+j));


    botonoiz = devolverboton(15 - i, 15 -j);
    botonoTiz = devolverboton(15 -(1+i), 15 -j);
    botonoBiz = devolverboton(15 -(i-1), 15 -j);
    botonoLiz = devolverboton(15 -i, 15 -(j-1));
    botonoRiz = devolverboton(15 -i, 15 -(1+j));


        //Parte DERECHA

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

    //Parte IZQUIERDA

    botonoiz.innerHTML = "X"

    if(botonoTiz)
    {
        botonoTiz.innerHTML = "X";
    }

    if(botonoBiz)
    {
        botonoBiz.innerHTML = "X";
    }

    if(botonoLiz)
    {
        botonoL.innerHTML = "X";
    }

    if(botonoRiz)
    {
        botonoRiz.innerHTML = "X";
    }


    /*botono.disabled = true;
    botonoL.disabled = true;
    botonoR.disabled = true;
    botonoT.disabled = true;
    botonoB.disabled = true;*/
}

 main()

