const artworks = [
    {
        title: "Abstract Kid",
        artist: "Random Kid",
        description: "bye bye kid",
        interactive: false
    },
    {
        title: "Weird Kid Land",
        artist: "A Ghost Watching You",
        description: "Basically yourself in 2 minutes",
        interactive: true
    }
];

let currentartwork = null;

function setup() {
    createCanvas(windowWidth/5, windowHeight/5);
    noLoop();
    const artworkContainer = select("#artworkcontainer"); 
    for (let i = 0; i < artworks.length; i++) {
        const artworkdiv = createDiv();
        artworkdiv.class("artwork");
        artworkdiv.elt.addEventListener("click", () => selectartwork(i));
        const artworktitle = createElement("h2", artworks[i].title);
        const artistname = createElement("p", "by someone named: " + artworks[i].artist);
        artworkdiv.child(artworktitle);
        artworkdiv.child(artistname);
        artworkContainer.child(artworkdiv);
    }
}

function draw() {
    canvas.style.position = 'absolute';
    canvas.style.top = '359px';
    if (currentartwork !== null) {
        currentartwork.display();
    }
}

function selectartwork(index) {
    if (artworks[index].interactive) {
        currentartwork = new interactiveArtwork();
    } else {
        currentartwork = new staticArtwork();
    }
    redraw();
}

class staticArtwork {
    display() {
        fill(random(255), random(255), random(255));
        ellipse(width / 2, height / 2, 200);
    }
}

class interactiveArtwork {
    display() {
        fill(100, 0, 0);
        rectMode(CENTER);
        rect(width / 2, height / 2, 200, 200);
    }
}
