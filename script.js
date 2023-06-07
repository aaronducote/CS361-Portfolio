// Function to read the text file line by line
function readTextFile(file) {
    var imageContainer = document.getElementById("imageContainer");
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var links = allText.split("\n");

                for (var i = 0; i < links.length; i++) {
                    var link = links[i];
                    if (link.trim() !== "") {
                        var img = document.createElement("img");
                        img.src = link;
                        imageContainer.appendChild(img);
                    }
                }
            }
        }
    };
    rawFile.send(null);
}

// Function to handle button click event
function handleButtonClick() {
    var button = document.getElementById("displayButton");
    button.removeEventListener("click", handleButtonClick); // Remove the event listener after first click
    readTextFile("image_links.txt");
}

// Add event listener to the button
var button = document.getElementById("displayButton");
button.addEventListener("click", handleButtonClick);