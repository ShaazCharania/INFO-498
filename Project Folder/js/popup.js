alert('Hello, world!');

document.addEventListener('DOMContentLoaded', function() {
    var fileInput = document.getElementById('musicFileInput');
    var fileInputLabel = document.querySelector('.custom-file-label');

    fileInput.addEventListener('change', function() {
        var fileName = fileInput.value.split('\\').pop(); 
        fileInputLabel.textContent = fileName || 'Choose music file'; 
    });

    document.getElementById('analyzeButton').addEventListener('click', function() {
        var file = fileInput.files[0];
        if (!file) {
            document.getElementById('result').textContent = 'Please select a file to analyze.';
            return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            var buffer = e.target.result;
            var mockResponse = { result: 'AI Music Detected' };
            document.getElementById('result').textContent = 'Result: ' + mockResponse.result;
        };
        reader.readAsArrayBuffer(file);
    });

});

