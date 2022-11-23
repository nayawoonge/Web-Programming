document.write("2019250061 황지웅", '</br>');

function dogsAge(age)
{
    return age * 7;
}

var myDogsAge = dogsAge(4);

function rectangleArea(width, height)
{
    var area = width * height;
    return area;
}

var rectArea = rectangleArea(3,4);

function addUp(numArray)
{
    var total = 0;
    for ( var i = 0 ; i < numArray.length ; i ++)
    {
        total += numArray[i];
    }
    return total;
}

var theTotal = addUp([1,5,3,9]);

function getAvatar(points)
{
    var avatar;
    if ( points < 100 )
    {
        avatar = "Mouse";
    }
    else if ( points > 100 && points < 1000 )
    {
        avatar = "Cat";
    }
    else
    {
        avatar = "Ape";
    }
    return avatar;
}
var myAvatar = getAvatar(335);

document.write("myDogAGE = ", myDogsAge, '</br>');
document.write("rectArea = ", rectArea, '</br>');
document.write("theTotal = ", theTotal, '</br>');
document.write("myAvatar = ", myAvatar, '</br>');