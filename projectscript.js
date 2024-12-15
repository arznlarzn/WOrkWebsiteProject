

document.addEventListener("DOMContentLoaded", function() {
    const projects = {
        "larsondavis.io": {
            projectpage: "#",
            description: "Building a website to serve as a portfolio. Not all teachers recommend this. I can understand why, since I have seen some websites that I think would be better, simply, not existing. You don't wanna fall in with that bunch.<br><br>*The image was of my landing page before launch.*<br><br>But my decision to go through with this is pretty straight-forward:<br> - It sounded like a really fun project<br> - It would come with a ton of practical experience<br> - the skills gained are valuable to have *right* now<br> - Lastly, I'd rather try and fail and learn from it, than learn nothing at all.",
            github: "https://github.com/arznlarzn/WOrkWebsiteProject",
            image: "/homepage.jpg",
        },
        "Web-Based Magic 8-Ball": {
            projectpage: "#",
            description: "This was just a simple project that I first used to enter into JavaScript. With that said, the original project was basically just a reproduction of a video walkthrough on YouTube. The image you see above is what I was left with after the tutorial. There was exactly 0 contribution from me at that point.<br><br>So, I decided I would rebuilt it myself without reviewing the original code and trying to avoid getting outside help. I suspect my remake will look very different. Will update the images and linkes when I complete this project. <br><br>Why I built this:<br>- I was interested in learning the basics of JavaScript<br>- I wanted to get more experience with HTML and CSS<br>- It sounded fun",
            github: "https://github.com/arznlarzn/GitHubMagic8Ball",
            image: "/Magic8Ball.jpg",
        },
        "A Desktop AI chatbot": {
            projectpage: "#",
            description: "This is a very simple AI chatbot desktop application. It is built with Python, tkinter, and llama-3. Not only does this connect and allow you to ask questions or write prompts, but I've also included a personality textbox, where the user can include the role of the AI to consider as it responds to the prompt.<br><br>Why I built this:<br>- I was interested in having easier access to using AI<br>- I wanted to use more APIs<br>- I was really interested in building anything with AI<br>- it sounded fun",
            github: "music.html",
            image: "larson.jpg",
        },
        "An Unhinged Reddit Bot": {
            projectpage: "#",
            description: "DISCLAIMER:I'm pretty sure that this would violate the terms of service, so this is an incomplete project as of now, however, still thought it sounded like a lot of fun and would be funny.<br><br>The premise was: Build an AI chatbot that responds to AITAH posts on reddit. The task was going to be to mock indiviuals who were very clearly 'not wrong', and to be incredibly sarcastic. The bot name would be \"Do not trust me- I'm AI\", however, would not try to convince other's that they aren't AI, but never actually admit it. There are many clear issues with this premise, but also, hilarious.<br><br>The motivations for creating this:<br>- It sounded super funny when I first thought of it<br>- I wanted to build a chatbot at all<br>- The experience would be new for me and I'd definitely learn<br>- Bragging rights<br>- It sounded fun... again.",
            github: "abouthim.html",
            image: "larson.jpg",
        },
        "Sobriety Calculator": {
            projectpage: "#",
            description: "This was my very first project where I actually built something. I got a lot of help from YouTube and asking ChatGPT to explain everything that was happening at every step. As simple as this tool was, it had a GUI and a functional calendar that kept track of the user's sobriety date.<br><br>Why I built it:<br>- I wanted to build something and combine it with Recovery<br>- I wanted to build something that used a GUI<br>- I wanted to build with Python",
            github: "index.html",
            image: "/Sobriety Calculator.jpg",
        },
        "A Custom Water Loop": {
            projectpage: "#",
            description: "This wasn't so much a development project, however it obviously demonstrates basic knowledge of setting up a windows environment (Yes, I put it together, AND I set it up, too!). I have built a fare amount of PCs, but even without the water-cooling, I am proud of this build. And if you know computer hardware, although I look like a Corsair Fanboy, I am not. XD They just nailed the asthetic. =] <br><br>This is a Corsair D4000 case. I have an Intel Core i7-14700k, 32GB of DDR4 at 3200Mhz (before MT/s), and a Founder's Edition 3080TI. My CPU and GPU are both on Corsair waterblocks, and I have a resevoir/pump combo, also Corsair.<br><br>I am running Windows 11, and I made this decision because of the reported advantage of the P and E-core architecture on Windows 11. <br><br>That time I posted on Reddit how I lost my gf, but still had my PC.<br><br>Why did I spend money on this?:<br>- I have always wanted to water-cool a PC/ not that AIO Bulls***<br>- I have never done it and love building PCs<br>- Bragging Rights<br>- Ray-Tracing<br>- The best gaming experience possible<br>- Bragging rights, again<br>- It sounded fun, again",
            github: "https://www.reddit.com/r/watercooling/comments/1ex8u8t/my_girlfriend_left_me_at_least_ive_got_you/",
            image: "/MyBeastEE.png",
        },
        "The Classic To-Do List": {
            projectpage: "#",
            description: "I had to. I honestly feel like the way we all know \'Hello World\' is the gateway into programming/coding at all, the \'To-Do List\' is, for many, the first real project. It wasn't for me, but I know the value of experience... and I love this stuff.<br><br>Why I built this:<br>-Interested in learning JavaScript<br>-I was also interested in using HTML and CSS more<br>-I actually thought maybe I could use it<br>-I could always add a real-time server and expand it<br>-The experience is needed<br>-it sounded fun",
            github: "",
            image: "/todolist2.jpg",
        },
    };


    const projectItems = document.querySelectorAll("#listColumn ul li");
    const contentDisplay = document.getElementById("contentDisplayColumn");

// Function to display project details // 
function displayProject(projectKey) { 
    const project = projects[projectKey];
    if (project) {
        contentDisplay.innerHTML = `
            <h4>${projectKey}</h4>
            <center><img src="${project.image}" alt="${projectKey}" class="img-fluid project-image" id="projectImage" onclick="openModal('${projectKey}-modal')"></center>
            <div id="${projectKey}-modal" class="modal">  <!--I am creating modals here instead in the HTML file, because it also needs to update along with this information -->
                <span class="close" onclick="closeModal('${projectKey}-modal')">&times;</span>
                <img class="modal-content" id="${projectKey}-modalImage" src="${project.image}" alt="${projectKey}">
            </div>
            <a href="${project.projectpage}" id="comingSoonLinkAlert">Learn More Here</a>
            <br><br>
            <p>Project Description:<br>${project.description}</p>
            <a href="${project.github}" target="_blank">GitHub Repository</a>` // we want the github repo to open in a new tab, 
            ;// as to keep my website open on their machine, so as to not get pulled away to not come back
            const comingSoonLinkAlert = document.getElementById("comingSoonLinkAlert");

            comingSoonLinkAlert.addEventListener("click", function(event) {
                event.preventDefault();
                alert("Detailed descriptions, along with tools and technologies used, will be added soon! Thank you, again!");
            })
        
        }// While we wanted the github to open in a new tab, we want project page to just update the tab instead. 
    } 
    
    // Check URL parameters for a specific project - this is so from the index.html, users can click 'here' to be taken to 
    // projects page, but specifically to this website project.
    const urlParams = new URLSearchParams(window.location.search);
    const projectKey = urlParams.get('project');
    if (projectKey) {
        displayProject(projectKey);
    }
    
    window.openModal = function (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
      };
      
    window.closeModal = function (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
        }
    };
      
    projectItems.forEach(item => {
        item.addEventListener("click", function() {
            const projectKey = this.textContent.split(" - ")[0].trim;
            displayProject(projectKey);
        })
    })

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

