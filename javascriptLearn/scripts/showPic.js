/**
 * Created by wanglei on 17-4-25.
 */
function showPic(whichpic) {
    // if(!document.getElementById())
    //     return false;
    // if(!document.getElementsByTagName())
    //     return false;
    // if(!document.)
    var source = whichpic.getAttribute('href');
    var placehold = document.getElementById('placehold');
    placehold.setAttribute('src',source);

    var text = whichpic.getAttribute('title');
    var description = document.getElementById('description');
    description.childNodes[0].nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName('body')[0];
    alert(body_element.childNodes.length);
}

window.onload = countBodyChildren();