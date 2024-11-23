

document.addEventListener("DOMContentLoaded", function() {
    const projects = {
        "larsondavis.io": {
            description: "<br>This is not a new idea. Building a website to use as a portfolio. However, not all teachers recommends it. I can understand why, having seen some websites that I think would be better not existing. You don't wanna fall in with that bunch.<br><br>But my decision to go through with this is pretty straight-forward:<br> - It sounded like a really fun project<br> - It would come with a ton of practical experience<br> - the skills gained are valuable right now<br> - Lastly, I'd rather try and fail and learn from it, than learn nothing at all.<br><br>See the github repository for details into the tools I used as well.",
            github: "index.html", // for now, but i will update this as soon as I upload these files to github.
            image: "/larson.jpg",
        },
        "Web-Based Magic 8-Ball": {
            description: "<br>This is a web based Magic 8-Ball simulator- built on HTML, CSS, and JS. It's a very simple web app where most of it's visual elements have been made with CSS, and it's logic and responses are all built within the JavaScript file.<br><br>This was my first entry into using JavaScript. Really, really simple, but still, why not include it.",
            github: "will contain a specific url to the github repo",
            image: "/larson.jpg",
        },
        "A Desktop AI chatbot": {
            description: "This a personal ai chatbot built with python,a available right on your desktop! You can set it's personality too!",
            github: "will contain a specific url to the github repo",
            image: "/larson.jpg",
        },
        "An Unhinged Reddit Bot": {
            description: "This is an unhinged reddit bot lurking in the AITAH subreddit.",
            github: "will contain a specific url to the github repo",
            image: "/larson.jpg",
        },
        "Sobriety Calculator": {
            description: "This was like my very first python project where I actually built something. I built it using tkinter to create a GUI.",
            github: "will contain a specific url to the github repo",
            image: "/larson.jpg",
        },
        "A Custom Water Loop": {
            description: "This wasn't so much a coding project as it was a physical project, but it obviously takes knowing your basics of putting a windows computer together. But my custom-built hardline water-cooled machine is certainly not nothing. =]",
            github: "will contain a specific url to the github repo",
            image: "/larson.jpg",
        },
    };


    const projectItems = document.querySelectorAll("#listColumn ul li");
    const contentDisplay = document.getElementById("contentDisplayColumn");

// Function to display project details 
function displayProject(projectKey) { 
    const project = projects[projectKey];
    if (project) {
        contentDisplay.innerHTML = `
            <h3>${projectKey}</h3>
            <center><img src="${project.image}" alt="${projectKey}" class="img-fluid project-image"></center>
            <p>${project.description}</p>
            <a href="${project.github}" target="_blank">GitHub Repository</a>
            `;
        }
    } 
    
    // Check URL parameters for a specific project - this is so from the index.html, users can click 'here' to be taken to 
    // projects page, but specifically to this website project.
    const urlParams = new URLSearchParams(window.location.search);
    const projectKey = urlParams.get('project');
    if (projectKey) {
        displayProject(projectKey);
    }
    
    //add click event listeners
    projectItems.forEach(item => {
        item.addEventListener("click", function() {
            const projectKey = this.textContent.split(' - ')[0];
            const project = projects[projectKey];

        displayProject(projectKey);
        });
    });
});