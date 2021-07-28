var displayName = document.querySelector('#profileName');

function changeName() {
    displayName.innerHTML = "Zach Kellen";
}

var connections = 418;
document.querySelector('#connectionAmount').innerHTML = connections;
var connectionsUpdate = document.querySelector('#connectionAmount');

var requestCount = 2;
var requests = document.querySelector('#requests');
requests.innerHTML = requestCount;


function accept(element) {
    connections++;
    connectionsUpdate.innerHTML = connections;
    requestCount--;
    requests.innerHTML = requestCount
    element.parentNode.parentNode.remove();
}

function deny(element) {
    connections--;
    connectionsUpdate.innerHTML = connections;
    requestCount--;
    requests.innerHTML = requestCount
    element.parentNode.parentNode.remove();
}