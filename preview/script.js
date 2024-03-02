document.addEventListener("DOMContentLoaded", async function () {
    // read the two list.txt files inside the /folder-icons and /app-icons folders and get files names of each line from it
    const folderIcons = await fetch("/folder-icons/list.txt").then((res) => res.text());
    const appIcons = await fetch("/app-icons/list.txt").then((res) => res.text());
    const folderIconsList = folderIcons.split("\n");
    const appIconsList = appIcons.split("\n");

    let icongrid = document.getElementById("grid");

    // create the folder icons
    folderIconsList.forEach((icon) => {
        if (icon) {
            let img = document.createElement("img");
            img.src = `/folder-icons/${icon}`;
            img.alt = icon;
            img.title = icon;
            img.classList.add("icon");
            icongrid.appendChild(img);
        }
    });

    // create the app icons
    appIconsList.forEach((icon) => {
        if (icon) {
            let img = document.createElement("img");
            img.src = `/app-icons/${icon}`;
            img.alt = icon;
            img.title = icon;
            img.classList.add("icon");
            icongrid.appendChild(img);
        }
    });
});
