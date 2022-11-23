window.onload = init;
function init()
{
    var add_button = document.getElementById("addButton");
    var clear_button = document.getElementById("clearButton");
    clear_button.onclick = handleClearButtonClick;
    add_button.onclick = handleAddButtonClick;
    loadPlaylist();
}

function handleAddButtonClick()
{
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    var li = document.createElement("li");
    li.innerHTML = songName;
    var ul = document.getElementById("playlist");
    ul.appendChild(li);
    save(songName);
}

function handleClearButtonClick()
{
    clear();
}