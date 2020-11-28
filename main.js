
var textarea = document.getElementById('pastelinks');
function openall() {
    var to_Lower = textarea.value.toLowerCase();
    var removeSpace = to_Lower.replace(/\s/g, '');
    var intoobj = removeSpace.split(',');
    var missingExtn = [];
    intoobj.forEach(function (link) {
        if (link.indexOf('.') == -1) {
            if (link.indexOf('http') == -1) {
                // http and extension both missing
                window.open('http://google.com/search?q=' + link); //for basic search
            } else {
                // http here but extension missing
                //window.open('http://google.com/search?q=' + link.substr(7)); // for basic search
                missingExtn.push(link.substr(7));
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
    fetch("websitelist.json")
        .then(response => response.json())
        .then(website_data => website_data.forEach(function (name) {
            if (name.website_name.search(missingExtn) != -1) {
                window.open('http://' + name.website_name, '_blank');
            }
        }));
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




//Refreshing page automatically when viewport size change
// window.addEventListener('resize', function () {
//     window.location.reload();
// });

//press enter
// textarea.addEventListener("keyup", function (e) {
//     if (e.keyCode === 13) {
//         e.preventDefault();
//         document.getElementById('openall').click();
//     }
// })
///
// if (window.visualViewport.width <= 650) {
//     textarea.style.width = (window.visualViewport.width - 20) + "px";
// } else {
//     textarea.style.width = 630 + "px";
// }