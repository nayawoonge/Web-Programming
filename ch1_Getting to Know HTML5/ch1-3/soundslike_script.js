var walksLike = "duck";
var soundsLike = document.getElementById("soundslike");
if (walksLike == "dog")
{
    soundsLike.innerHTML = "Woof! Woof!";
}
else if (walksLike == "duck")
{
     soundsLike.innerHTML = "Quack, Quack";
}
else
{
    soundsLike.innerHTML="Crickets...";
}
   