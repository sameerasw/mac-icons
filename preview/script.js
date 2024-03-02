document.addEventListener("DOMContentLoaded", async function () {
    // Specify the subdirectory paths
    var foldericons = 'folder-icons/';
    var appicons = 'app-icons/';

    // Get the imageGallery container
    var imageGalleryContainer = document.getElementById('grid');

    try {
        // Fetch the list of images in the subdirectories
        const [folderIconsResponse, appIconsResponse] = await Promise.all([
            fetch(foldericons),
            fetch(appicons)
        ]);

        // Parse the HTML responses
        const [folderIconsHtml, appIconsHtml] = await Promise.all([
            folderIconsResponse.text(),
            appIconsResponse.text()
        ]);

        // Create a temporary div to parse the HTML
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = folderIconsHtml + appIconsHtml;

        // Get all the image file names if it's a .png file
        var imageFiles = Array.from(tempDiv.querySelectorAll('a'))
            .map(a => a.href)
            .filter(href => href.match(/\.(png)$/));

        // Generate img tags and append them to the imageGallery container
        imageFiles.forEach(function (imageFile) {
            var img = document.createElement('img');
            img.src = imageFile;
            img.alt = imageFile; // You can set alt text if needed
            imageGalleryContainer.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
});
