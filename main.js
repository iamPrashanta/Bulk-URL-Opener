
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
    var brakingString = removeSpace.split(',');
    var adstURL = "http://";
    for (var i = 0; i < brakingString.length; i++) {
        console.log(brakingString[i]);
        if (brakingString[i].indexOf("http") == -1) {
            window.open(adstURL.concat(brakingString[i]), '_blank');
        } else {
            window.open(brakingString[i], '_blank');
        }
    }
}
