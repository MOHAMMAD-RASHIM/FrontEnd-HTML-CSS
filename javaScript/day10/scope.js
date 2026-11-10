let a = 100; // GLOBAL SCOPED VARIABLE

function fun()
{
    let b = 200; // FUNCTION SCOPED VARIABLE
    console.log(b);

    if(b>=200)
    {
        let c = 300; // BLOCK SCOPED VARIABLE
    }

}