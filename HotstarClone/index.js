let movies=[
    {
        name:"Loki",
        des:" Loki, god of mischief, explores post-Endgame journey. Tom Hiddleston's reprised role blends action, humor, and depth, unraveling his intricate character.",
        image:"./slider 1.png"
    },
    {
        name:"falcon and the winter soldier",
        des:"Sam Wilson and Bucky Barnes navigate a post-Steve Rogers world, exploring identity, responsibility, and challenges in a hero-filled landscape.",
        image:"./slider 2.png"
    },
    {
      name:"Wanda Vision",
      des:"Series mixes genres, centers on Scarlet Witch and Vision post-Endgame. Living idyllically in Westview, unraveling mysteries of their reality. ",
      image:"./slider 3.png"  
    },
    {
        name:"raya and the last dragon",
        des: "Raya, warrior princess, seeks to save her divided kingdom Kumandra from a plague by uniting factions and restoring harmony.",
        image:"./slider 4.png"  
    },
    {
        name:"Luca",
        des:"Luca, a sea monster, befriends Alberto, desiring to explore the human world. Their aquatic secret becomes a magical adventure on land.",
        image:"./slider 5.png"  
    }
];

const carousel=document.querySelector('.carousel');
let sliders=[];

let slideIndex=0; 
//to track the current slider

const createSlide= () => {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }


// create DOM Elements
let slide= document.createElement('div');
var imgElement= document.createElement('img');
let content= document.createElement('div');
let h1= document.createElement('h1');
let p= document.createElement('p');


h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(content);
slide.appendChild(imgElement);
carousel.appendChild(slide);

imgElement.src = movies[slideIndex].image;
slideIndex++;

slide.className = "slider";
content.className = "slide-content";
h1.className = "movie-title";
p.className = "movie-des";

sliders.push(slide);

if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
}
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

// Apply a smooth transition to the carousel for smoother slide changes
carousel.style.transition = "margin-left 0.5s ease-in-out";

setInterval(() => {
    createSlide();
}, 3000);



// video cards
const videoCards =document.querySelectorAll('.video-card');

videoCards.forEach((item) => {
    let video = item.querySelector('video'); // Assuming the video element is the second child

    item.addEventListener("mouseover", () => {
        video.play(); // Play the video when mouse is over
    });

    item.addEventListener("mouseleave", () => {
        video.pause(); // Pause the video when mouse leaves
    });
});



// card sliders
let cardContainers=document.querySelectorAll('.card-container');
let preBtns=document.querySelectorAll('.pre-btn');
let nxtBtns=document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerwidth=containerDimensions.width;

    preBtns[i].addEventListener("click",()=>{
        item.scrollLeft-=containerwidth+200;
        
        // Adjust this value for slower/faster scrolling
    });

    nxtBtns[i].addEventListener("click",()=>{
        item.scrollLeft+=containerwidth-200;
    });

});



