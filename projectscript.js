

document.addEventListener("DOMContentLoaded", function() {
    const projects = {
        "larsondavis.io": {
            projectpage: "index.html",
            description: "Build a website to serve as a portfolio. However, not all teachers recommend this. I can understand why, since I have seen some websites that I think would be better by simply not existing. You don't wanna fall in with that bunch.<br><br>But my decision to go through with this is pretty straight-forward:<br> - It sounded like a really fun project<br> - It would come with a ton of practical experience<br> - the skills gained are valuable to have *right* now<br> - Lastly, I'd rather try and fail and learn from it, than learn nothing at all.",
            github: "index.html", // for now, but i will update this as soon as I upload these files to github.
            image: "larson.jpg",
        },
        "Web-Based Magic 8-Ball": {
            projectpage: "blogs.html",
            description: "This was just a simple project that I first used to enter into JavaScript. With that said, the original project was basically just a reproduction of a video walkthrough on YouTube. So, I rebuilt it myself from scratch and without reviewing the original code. What came out looks very different XD<br><br>Why I built this:<br>- I was interested in learning the basics of JavaScript<br>- I wanted to get a little more experience with HTML and CSS<br>- It sounded fun",
            github: "blogs.html",
            image: "larson.jpg",
        },
        "A Desktop AI chatbot": {
            projectpage: "music.html",
            description: "This is a very simple AI chatbot desktop application. It is built with Python, tkinter, and llama-3. Not only does this connect and allow you to ask questions or write prompts, but I've also included a personality textbox, where the user can include the role of the AI to consider as it responds to the prompt.<br><br>Why I built this:<br>- I was interested in having easier access to using AI<br>- I wanted to use more APIs<br>- I was really interested in building anything with AI<br>- it sounded fun",
            github: "music.html",
            image: "larson.jpg",
        },
        "An Unhinged Reddit Bot": {
            projectpage: "abouthim.html",
            description: "DISCLAIMER:I'm pretty sure that this would violate the terms of service, so this is an incomplete project as of now, however, still thought it sounded like a lot of fun and would be funny.<br><br>The premise was: Build an AI chatbot that responds to AITAH posts on reddit. The task was going to be to mock indiviuals who were very clearly 'not wrong', and to be incredibly sarcastic. The bot name would be \"Do not trust me- I'm AI\", however, would not try to convince other's that they aren't AI, but never actually admit it. There are many clear issues with this premise, but also, hilarious.<br><br>The motivations for creating this:<br>- It sounded super funny when I first thought of it<br>- I wanted to build a chatbot at all<br>- The experience would be new for me and I'd definitely learn<br>- Bragging rights<br>- It sounded fun... again.",
            github: "abouthim.html",
            image: "larson.jpg",
        },
        "Sobriety Calculator": {
            projectpage: "index.html",
            description: "This was my very first project where I actually built something. I got a lot of help from YouTube and asking ChatGPT to explain everything that was happening at every step. As simple as this tool was, it had a GUI and a functional calendar that kept track of the user's sobriety date.<br><br>Why I built it:<br>- I wanted to build something and combine it with Recovery<br>- I wanted to build something that used a GUI<br>- I wanted to build with Python",
            github: "index.html",
            image: "larson.jpg",
        },
        "A Custom Water Loop": {
            projectpage: "music.html",
            description: "This wasn't so much a coding project as it was a physical project, but it obviously takes knowing your basics of putting a windows computer together. But my custom-built hardline water-cooled machine is certainly not nothing. =]<br><br>Why did I spend money on this?:<br>- I have always wanted to water-cool a PC/ not that AIO Bulls***<br>- I have never done it and love building PCs<br>- Bragging Rights<br>- Ray-Tracing<br>- The best gaming experience possible<br>- Bragging rights, again<br>- It sounded fun, again",
            github: "music.html",
            image: "larson.jpg",
        },
    };


    const projectItems = document.querySelectorAll("#listColumn ul li");
    const contentDisplay = document.getElementById("contentDisplayColumn");

// Function to display project details 
function displayProject(projectKey) { 
    const project = projects[projectKey];
    if (project) {
        contentDisplay.innerHTML = `
            <h4>${projectKey}</h4>
            <center><img src="${project.image}" alt="${projectKey}" class="img-fluid project-image" id="projectImage"></center>
            <a href="${project.projectpage}">Learn More Here</a>
            <br><br>
            <p>Project Description:<br>${project.description}</p>
            <a href="${project.github}" target="_blank">GitHub Repository</a>` // we want the github repo to open in a new tab, 
            ;// as to keep my website open on their machine, so as to not get pulled away to not come back
        }// While we wanted the github to open in a new tab, we want project page to just update the tab instead. 
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

console.log("Say hi to your mom for me! =] -Larson");