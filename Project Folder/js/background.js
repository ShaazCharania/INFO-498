chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    fetch('http://localhost:5000/analyze', {
        method: 'POST',
        body: request.file
    })
    .then(response => response.json())
    .then(data => sendResponse({result: data.result}))
    .catch(error => console.error('Error:', error));
    return true;  // Indicates asynchronous response.
});
