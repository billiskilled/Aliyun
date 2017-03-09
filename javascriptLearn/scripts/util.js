/**
 * Created by billi on 2017/3/8.
 */
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placehold = document.getElementById("placehold");
    placehold.setAttribute("src",source);

    var des = document.getElementById("description");
    var text = whichpic.getAttribute("title");
    des.firstChild.nodeValue = text;
}

function countChildrenElement() {
    var bodyElement = document.getElementsByTagName("body")[0];
    alert(bodyElement.childNodes.length);
}
//
// function changeDescription() {
//
// }

function showNodeType() {
    var bodyElement = document.getElementsByTagName("body")[0];
    var nodes = bodyElement.childNodes;
    for(var i = 0;i < nodes.length;i++) {
        alert(nodes[i].nodeType);
    }
}

window.onload=countChildrenElement;