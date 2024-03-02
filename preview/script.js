document.addEventListener("DOMContentLoaded", async function () {
    // Specify the GitHub repository information
    var username = 'sameerasw';
    var repo = 'mac-icons';
    var path1 = 'folder-icons/';
    var path2 = 'app-icons/';

    // Get the imageGallery container
    var imageGalleryContainer = document.getElementById('grid');

    function fetchImages(path) {
        return fetch(`https://api.github.com/repos/${username}/${repo}/contents/${path}`)
            .then(response => response.json())
            .then(data => {
                // Filter only the image files
                var imageFiles = data.filter(item => item.type === 'file' && item.name.match(/\.(jpg|jpeg|png|gif)$/i));

                // Generate img tags and append them to the imageGallery container
                imageFiles.forEach(function (imageFile) {
                    var img = document.createElement('img');
                    img.src = imageFile.download_url;
                    img.alt = imageFile.name; // You can set alt text if needed
                    imageGalleryContainer.appendChild(img);
                });
            })
            .catch(error => console.error('Error fetching images:', error));
    }

    try {
        // Fetch the list of images in the subdirectories
        Promise.all([fetchImages(path1), fetchImages(path2)])
            .catch(error => console.error('Error fetching images:', error));
    } catch (error) {
        console.error('Error fetching images:', error);
    }
});
