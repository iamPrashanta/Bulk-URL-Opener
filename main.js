
var textarea = document.getElementById('pastelinks');
function openall() {
    var to_Lower = textarea.value.toLowerCase();
    var removeSpace = to_Lower.replace(/\s/g, '');
    var intoobj = removeSpace.split(',');
    intoobj.forEach(function (link) {
        if (link.indexOf('.') == -1) {
            if (link.indexOf('http') == -1) {
                // http and extension both missing
                window.open('http://google.com/search?q=' + link);
            } else {
                // http here but extension missing
                window.open('http://google.com/search?q=' + link.substr(7));
            }
        }
        else if (link.indexOf('http') == -1) {
            // only http missing , extension found
            window.open('http://' + link);
        }
        else {
            // perfect link
            window.open(link, '_blank');
        }
    })
}


function clearr() {
    if (!textarea.value.length == 0) {
        var conf_sms = confirm('are you sure ?');
        if (conf_sms == true) {
            textarea.value = "";
        }
    } else {
        alert('Textarea already Cleared');
    }
}


function popupImg() {
    document.getElementById('popup_image').style.display = 'block';
}
function closePopup() {
    document.getElementById('popup_image').style.display = 'none';
}

