

document.addEventListener("DOMContentLoaded", function() {
    const projects = {
        "larsondavis.io": {
            projectpage: "#",
            description: "Building a website to serve as a portfolio. Not all teachers recommend this. I can understand why, since I have seen some websites that I think would be better, simply, not existing. You don't wanna fall in with that bunch.<br><br>*The image was of my landing page before launch.*<br>*AND- AI was only used when I needed help problem solving. The whole point of the site was really to build it myself and LEARN from it. =]<br><br>But my decision to go through with this is pretty straight-forward:<br> - It sounded like a really fun project<br> - It would come with a ton of practical experience<br> - the skills gained are valuable to have *right* now<br> - Lastly, I'd rather try and fail and learn from it, than learn nothing at all.",
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
            description: "NOTE:The picture is useless and has nothing to do with anything XD XD<br><br>This is a very simple AI chatbot desktop application. It is built with Python, tkinter, and llama-3. Not only does this connect and allow you to ask questions or write prompts, but I've also included a personality textbox, where the user can include the role of the AI to consider as it responds to the prompt.<br>*UPDATE: Well, it turns out, I managed to delete this entire project. So, I will be rebuilding it. Probably, for the best. I will update this when I complete this.<br><br>Why I built this:<br>- I was interested in having easier access to using AI<br>- I wanted to use more APIs<br>- I was really interested in building anything with AI<br>- it sounded fun",
            github: "music.html",
            image: "/AIphoto.jpg",
        },
        "An Unhinged Reddit Bot": {
            projectpage: "#",
            description: "DISCLAIMER:I'm pretty sure that this would violate the terms of service, so this is an incomplete project as of now, however, still thought it sounded like a lot of fun and would be funny.<br>ALSO - The image is just my favorite Reddit sub XD<br><br>The premise was: Build an AI chatbot that responds to AITAH posts on reddit. The task was going to be to mock indiviuals who were very clearly 'not wrong', and to be incredibly sarcastic. The bot name would be \"Do not trust me- I'm AI\", however, would not try to convince other's that they aren't AI, but never actually admit it. There are many clear issues with this premise, but also, hilarious.<br><br>The motivations for creating this:<br>- It sounded super funny when I first thought of it<br>- I wanted to build a chatbot at all<br>- The experience would be new for me and I'd definitely learn<br>- Bragging rights<br>- It sounded fun... again.",
            github: "abouthim.html",
            image: "/redditHome.jpg",
        },
        "Sobriety Calculator": {
            projectpage: "#",
            description: "This was my very first project where I actually built something. I got a lot of help from YouTube and asking ChatGPT to explain everything that was happening at every step. As simple as this tool was, it had a GUI and a functional calendar that kept track of the user's sobriety date.<br><br>Why I built it:<br>- I wanted to build something and combine it with Recovery<br>- I wanted to build something that used a GUI<br>- I wanted to build with Python",
            github: "https://github.com/arznlarzn/SobrietyCalculator",
            image: "/Sobriety Calculator.jpg",
        },
        "A Custom Water Loop": {
            projectpage: "#",
            description: "This wasn't so much a development project, however it obviously demonstrates basic knowledge of setting up a windows environment (Yes, I put it together, AND I set it up, too!). I have built a fare amount of PCs, but even without the water-cooling, I am proud of this build. And if you know computer hardware, although I look like a Corsair Fanboy, I am not. XD They just nailed the asthetic. =] <br><br>This is a Corsair D4000 case. I have an Intel Core i7-14700k, 32GB of DDR4 at 3200Mhz (before MT/s), and a Founder's Edition 3080TI. My CPU and GPU are both on Corsair waterblocks, and I have a resevoir/pump combo, also Corsair.<br><br>I am running Windows 11, and I made this decision because of the reported advantage of the P and E-core architecture on Windows 11.<br><br>Why did I spend money on this?:<br>- I have always wanted to water-cool a PC/ not that AIO Bulls***<br>- I have never done it and love building PCs<br>- Bragging Rights<br>- Ray-Tracing<br>- The best gaming experience possible<br>- Bragging rights, again<br>- It sounded fun, again<br><br>*What could the GitHub Repo be?*",
            github: "https://www.reddit.com/r/watercooling/comments/1ex8u8t/my_girlfriend_left_me_at_least_ive_got_you/",
            image: "/MyBeastEE.png",
        },
        "The Classic To-Do List": {
            projectpage: "#",
            description: "I had to. I honestly feel like the way we all know \'Hello World\' is the gateway into programming/coding at all, the \'To-Do List\' is, for many, the first real project. It wasn't for me, but I know the value of experience... and I love this stuff.<br><br>Why I built this:<br>-Interested in learning JavaScript<br>-I was also interested in using HTML and CSS more<br>-I actually thought maybe I could use it<br>-I could always add a real-time server and expand it<br>-The experience is needed<br>-it sounded fun",
            github: "https://github.com/arznlarzn/ToDoList",
            image: "/todolist2.jpg",
        },
        "Chore Point Tracker": {
            projectpage: "#",
            description: "I worked at a homeless shelter with over 150 'participants' and we gave 'points' to our participants if they helped us out in any way or wanted to earn them- they translated into staying out late or nights out (Yes, if you stay in a shelter, there are rules and expectations). You can see comments in the code explaining every part. In short:<br>Each bed had 2 people, (we catered to couples, partners, pairs) and we had a total of 76 beds.<br><br>Why I built it:<br>- We tracked the chore points by adding them to a spreadsheet, but different understandings and inconsistencies created constant issues<br>- I wanted to build something anyone could use with ease<br>- I wanted to build it as simply as possible, so I chose Python and tkinter<br>- I wanted to build something that would be useful<br>- it sounded fun<br>- this was a big deal for the people we served, and could be the difference between getting kicked out into the streets, or not",
            github: "https://github.com/arznlarzn/ChorePointTracker",
            image: "/ChorePointTracker.png",
        },
        "Command Line Text Editor Kilo": {
            projectpage: "#",
            description: "I am still in the process of building this. I am using a tutorial that I will link below. I really want to learn more low-level programming, and I actually found this tutorial a few years ago, however I could never understand what was going on when looking at the steps and/or trying to build it. Now, sometime later and much more understanding, I am actually getting it, bit by bit. lol<br>You will see a remarkable and kind of ridiculous amount of comments that I did my best to number by steps (not in conjunction with the tutorial), so it is quite distracting. This project was for me. I wrote the comments for myself to understand, so yes, they 'are' in fact distracting as hell.<BR>It is still a work in progress.<br><br>https://viewsourcecode.org/snaptoken/kilo/<br><br>Why I built this:<br><br>-Interested in actually understanding what is going on at a lower level<br>-I truly wanted to work with ones and zeros<br>-I want to begin understanding memory allocation<br>-This one really is all about learning<br>-This is probably the only project that didn't sound fun, but like I could learn a ton.<br>^And I totally am^",
            github: "https://github.com/arznlarzn/GitHubTextEditor",
            image: "",
        },
    };


    const projectItems = document.querySelectorAll("#listColumn ul li");
    const contentDisplay = document.getElementById("contentDisplayColumn");
    const githubLink = document.getElementById("githubLink");

// Function to display project details // 
function displayProject(projectKey) { 
    const project = projects[projectKey];
    if (project) {
        contentDisplay.innerHTML = `
            <h4>${projectKey}</h4>
            <center><img src="${project.image}" alt="${projectKey}" id="projectImage" onclick="openModal('${projectKey}-modal')"></center>
            <div id="${projectKey}-modal" class="modal">  <!--I am creating modals here instead in the HTML file, because it also needs to update along with this information -->
                <span class="close" onclick="closeModal('${projectKey}-modal')">&times;</span>
                <img class="modal-content" id="${projectKey}-modalImage" src="${project.image}" alt="${projectKey}">
            </div>
            <p><br>Project Description:<br>${project.description}</p>
            <a href="${project.github}" id="githubLink" target="_blank">GitHub Repository</a>` // we want the github repo to open in a new tab, 
            ;// as to keep my website open on their machine, so as to not get pulled away to not come back
            
            const githubLink = document.querySelector("#githubLink");
            const comingSoonLinkAlert = document.getElementById("comingSoonLinkAlert");

            if (projectKey === "An Unhinged Reddit Bot" || projectKey === "A Desktop AI chatbot") {
                githubLink.addEventListener("click", function(event) {
                    event.preventDefault();
                    alert("I do not have these GitHub repositories ready or haven't completed yet. Will update soon!");
                });
            } else {
                githubLink.addEventListener("click", function(event) {
                    window.open(project.github, "_blank");
                });
            }
        
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
            modal.style.display = "flex";
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
            const projectKey = this.textContent.split(' - ')[0];
            const project = projects[projectKey];
            
            displayProject(projectKey);
        });
    });

   
    

});

console.log("Say hi to your mom for me! =] -Larson");

