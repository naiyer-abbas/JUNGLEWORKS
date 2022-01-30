for(let i = 1; i <= 30; i++)
{
    if(!(i % 15))
    {
        console.log(`Hello World`);
    }

    else if(!(i % 5))
    {
        console.log(`World`);
    }

    else if(!(i % 3))
    {
        console.log(`Hello`);
    }

    else
    {
        console.log(i);
    }
}