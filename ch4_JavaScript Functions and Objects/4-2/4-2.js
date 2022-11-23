document.write("2019250061 황지웅", '<br>');

function getNextShowing(movie) 
{
	var now = new Date().getTime();
	for (var i = 0; i < movie.showtimes.length; i++) 
    {
		var showtime = getTimeFromString(movie.showtimes[i]);
		if ((showtime - now) > 0) 
        {
			return "Next showing of " + movie.title + " is " + movie.showtimes[i];
		}
	}
	return null;
}

function getTimeFromString(timeString) 
{
	var theTime = new Date();
	var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
	theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
	theTime.setMinutes( parseInt(time[2]) || 0 );
	return theTime.getTime();
}

var banzaiMovie = 
{
	title: "Buckaroo Banzai",
	genre: "Cult Classic",
	rating: 5,
	showtimes: ["1:00pm", "5:00pm", "7:00pm", "8:00pm", "10:00pm"]
};

var nextShowing = getNextShowing(banzaiMovie);
alert(nextShowing);