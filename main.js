
var textarea = document.getElementById('pastelinks');

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

function openall() {
    var removeSpace = textarea.value.replace(/\s/g, '');
    var intoobj = removeSpace.split(',');
    intoobj.forEach(function (link) {
        if (link.indexOf('.') == -1) {
            if (link.indexOf('http') == -1) {
                window.open('http://google.com/search?q=' + link);
            } else {
                window.open('http://google.com/search?q=' + link.substr(7));
            }
        }
        else if (link.indexOf('http') == -1) {
            window.open('http://' + link);
        }
        else {
            window.open(link, '_blank');
        }
    })
}
