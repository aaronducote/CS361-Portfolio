
function readTextFile(file) {
    var imageContainer = document.getElementById("imageContainer");   
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                var links = allText.split("\n");        // Split the text by line breaks

                for (var i = 0; i < links.length; i++) {
                    var link = links[i];
                    if (link.trim() !== "") {
                        var img = document.createElement("img");       // Creates an img element for each separate img
                        img.src = link;
                        imageContainer.appendChild(img);        // Makes images the children of the imageContainer
                    }
                }
            }
        }
    };
    rawFile.send(null);
}


function handleButtonClick() {
    var button = document.getElementById("displayButton");  
    button.removeEventListener("click", handleButtonClick);     // If button is clicked, remove the event listener
    readTextFile("image_links.txt");        // Reads the image links to display
}


var button = document.getElementById("displayButton"); 
button.addEventListener("click", handleButtonClick);