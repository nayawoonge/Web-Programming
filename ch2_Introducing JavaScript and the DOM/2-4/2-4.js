var scoops = 10;

while ( scoops >= 0 )
{
    if (scoops ==3)
    {
        alert("ice cream is running low!");
    }
    else if (scoops > 9)
    {
        alert("Eat faster, the ice cream is going to melt!");
    }
    else if (scoops == 2)
    {
        alert("going once!");
    }
    else if (scoops == 0)
    {
        alert("Gone!");
    }
    else
    {
        alert("Still lots of ice cream left, come and get it.");
    }

    scoops = scoops - 1;
}

alert("Life without ice cream isn't the smae");
