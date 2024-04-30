document.getElementById('analyzeButton').addEventListener('click', function() {
    var fileInput = document.getElementById('musicFileInput');
    var file = fileInput.files[0];
    if (!file) {
        document.getElementById('result').textContent = 'Please select a file to analyze.';
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var buffer = e.target.result;
        chrome.runtime.sendMessage({file: buffer}, function(response) {
            document.getElementById('result').textContent = 'Result: ' + response.result;
        });
    };
    reader.readAsArrayBuffer(file);
});
