// alert("JS Loaded");
// ================================
// Sticky Header
// ================================
window.addEventListener("scroll", function () {

    const header = document.getElementById("header");

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// ================================
// Mobile Dropdown
// ================================

document.querySelectorAll(".dropdown-toggle").forEach(function (item) {

    item.addEventListener("click", function (e) {

        if (window.innerWidth < 1200) {

            e.preventDefault();

            let menu = this.nextElementSibling;

            menu.classList.toggle("show");

        }

    });

});


// ================================
// Active Menu
// ================================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", function () {

        navLinks.forEach((item) => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ================================
// Navbar Fade Animation
// ================================

window.addEventListener("load", () => {

    header.style.opacity = "0";
    header.style.transform = "translateY(-40px)";

    setTimeout(() => {

        header.style.transition = ".8s ease";
        header.style.opacity = "1";
        header.style.transform = "translateY(0px)";

    }, 150);

});


// ================================
// Button Ripple Effect
// ================================

const buttons = document.querySelectorAll(".appointment-btn");

buttons.forEach(btn => {

    btn.addEventListener("mousemove", function(e){

        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;

        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");

    });

});


// ================================
// Navbar Shadow on Hover
// ================================

const navbar = document.querySelector(".navbar > .container");

navbar.addEventListener("mouseenter",()=>{

    navbar.style.transition=".4s";
    navbar.style.boxShadow="0 20px 60px rgba(0,0,0,.35)";

});

navbar.addEventListener("mouseleave",()=>{

    navbar.style.boxShadow="none";

});


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ================================
// Hero Animation
// ================================


const stars = document.querySelector(".bg-stars");

// Create 180 Stars
for(let i=0;i<180;i++){

    const star=document.createElement("span");

    star.classList.add("star");

    if(Math.random()>0.75){
        star.classList.add("gold");
    }

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    const size=(Math.random()*3)+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.animationDuration=(2+Math.random()*5)+"s";
    star.style.animationDelay=(Math.random()*5)+"s";

    stars.appendChild(star);
}


// Shooting Star
const shooting=document.querySelector(".bg-shooting");

function createShootingStar(){

    const star=document.createElement("span");

    star.className="shooting-star";

    star.style.top=Math.random()*40+"%";
    star.style.left=(70+Math.random()*30)+"%";

    shooting.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },5000);

}

setInterval(createShootingStar,7000);



$(document).ready(function () {

    $(".zodiac-slider").owlCarousel({

        loop: true,
        margin: 25,
        nav: true,
        dots: true,

        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

        smartSpeed: 800,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,

        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],

        responsive: {

            0: {
                items: 1
            },

            576: {
                items: 2
            },

            768: {
                items: 3
            },

            992: {
                items: 4
            },

            1200: {
                items: 5
            },

            1400: {
                items: 5
            }

        }

    });

});

























// Zodiac Section

  const zodiacSigns = [
  "Aries","Taurus","Gemini","Cancer","Leo","Virgo",
  "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
];

const svgNS = "http://www.w3.org/2000/svg";
const segsGroup = document.getElementById("segs");

if (segsGroup) {

  const cx = 200,
        cy = 200,
        rOuter = 176,
        rInner = 118;

  for (let i = 0; i < 12; i++) {

    const a0 = (i * 30 - 90) * Math.PI / 180;
    const a1 = ((i + 1) * 30 - 90) * Math.PI / 180;

    const x0 = cx + rOuter * Math.cos(a0);
    const y0 = cy + rOuter * Math.sin(a0);

    const xi0 = cx + rInner * Math.cos(a0);
    const yi0 = cy + rInner * Math.sin(a0);

    const amid = (a0 + a1) / 2;
    const rt = (rOuter + rInner) / 2;

    const tx = cx + rt * Math.cos(amid);
    const ty = cy + rt * Math.sin(amid);

    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", xi0);
    line.setAttribute("y1", yi0);
    line.setAttribute("x2", x0);
    line.setAttribute("y2", y0);
    line.setAttribute("stroke", "#d9ad5c");
    line.setAttribute("stroke-width", "1");
    line.setAttribute("opacity", "0.5");
    segsGroup.appendChild(line);

    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", tx);
    text.setAttribute("y", ty);
    text.setAttribute("fill", "#f3d99a");
    text.setAttribute("font-size", "9");
    text.setAttribute("font-family", "Jost, sans-serif");
    text.setAttribute("letter-spacing", "1");
    text.setAttribute("text-anchor", "middle");
    text.setAttribute(
      "transform",
      `rotate(${(amid * 180 / Math.PI) + 90} ${tx} ${ty})`
    );
    text.textContent = zodiacSigns[i].toUpperCase();

    segsGroup.appendChild(text);
  }

  const counters = document.querySelectorAll(".num[data-count]");

  const animateCount = (el) => {

    const target = Number(el.dataset.count);
    const duration = 1800;
    const start = performance.now();

    function update(now) {

      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor((1 - Math.pow(1 - progress, 3)) * target);

      el.textContent = value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(update);
  };

  const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        counters.forEach(animateCount);
        counterObserver.disconnect();

      }

    });

  }, {
    threshold: 0.4
  });

  const stats = document.querySelector(".stats-row");

  if (stats) {
    counterObserver.observe(stats);
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const particleHost = document.getElementById("particles");

  if (!reduceMotion && particleHost) {

    for (let i = 0; i < 26; i++) {

      const p = document.createElement("div");

      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.bottom = "-10px";

      const size = 1.5 + Math.random() * 2;

      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.animationDuration = (10 + Math.random() * 14) + "s";
      p.style.animationDelay = (Math.random() * 14) + "s";

      particleHost.appendChild(p);
    }
  }
}





// Timeline Section

const timeline = document.getElementById("vacTimeline");
const spineFill = document.getElementById("vacFill");
const steps = document.querySelectorAll(".vac-step");

if (timeline && spineFill && steps.length) {

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("vac-active");
      }
    });
  }, {
    threshold: 0.35
  });

  steps.forEach((step) => timelineObserver.observe(step));

  function updateSpine() {
    const rect = timeline.getBoundingClientRect();
    const total = rect.height;
    const viewport = window.innerHeight;

    let progress = (viewport * 0.75) - rect.top;
    progress = Math.max(0, Math.min(progress, total));

    spineFill.style.height = (progress / total) * 100 + "%";
  }

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateSpine();
        ticking = false;
      });
      ticking = true;
    }
  });

  window.addEventListener("resize", updateSpine);

  updateSpine();
}


/*=========================================
Particles
=========================================*/

// const particleBox=document.querySelector(".footer-particles");

// if(particleBox){

// for(let i=0;i<30;i++){

// let p=document.createElement("span");

// p.style.left=Math.random()*100+"%";

// p.style.animationDuration=(8+Math.random()*10)+"s";

// p.style.animationDelay=Math.random()*5+"s";

// particleBox.appendChild(p);

// }

// }



/*==================================================
TESTIMONIAL DATA
==================================================*/

const testimonialData = {

    google: {
        image: "images/clients/client2.jpeg",
        name: "Manjesh Babu",
        location: "Perth, Australia",
        text: "I was struggling with my career and personal life, but after consulting Bharat Bhargav Ji, I found clarity. His astrological advice and simple remedies brought positive changes in my life. Thank you, Guru Ji!"
    },

    facebook: {
        image: "images/clients/client4.jpeg",
        name: "Shaipali Singh",
        location: "Melbourne, Australia",
        text: "I have consulted many astrologers, but Bharat Bhargav Ji is truly the best. He patiently listened to my concerns and provided perfect solutions. His knowledge of Vedic Astrology is unmatched!"
    },

    video: {
        image: "images/clients/client1.jpeg",
        name: "Aneesh Chauhan",
        location: "Sydney, Australia",
        text: "I was facing delays in marriage, and after following Guru Ji's advice, things finally started to fall into place. His guidance was a blessing, and now I am happily married. Thank you so much!"
    },

    whatsapp: {
        image: "images/clients/client3.jpeg",
        name: "Mishthi Sharma",
        location: "Sydney, Australia",
        text: "Astrologer Bharat Bhargav Ji provided me with deep insights into my life. His predictions were incredibly accurate, and his remedies helped me overcome obstacles. I feel more confident and peaceful now. Highly recommended!"
    }

};

/*==================================================
ELEMENTS
==================================================*/

const reviewImage = document.getElementById("reviewImage");
const clientName = document.getElementById("clientName");
const clientCity = document.getElementById("clientCity");

const reviewText = document.getElementById("reviewText");
const reviewName = document.getElementById("reviewName");
const reviewLocation = document.getElementById("reviewLocation");

const platformCards = document.querySelectorAll(".platform-card");

/*==================================================
CHANGE REVIEW
==================================================*/

function changeReview(platform){

    if(!testimonialData[platform]) return;

    const data = testimonialData[platform];

    reviewImage.style.opacity = "0";
    reviewText.style.opacity = "0";

    setTimeout(()=>{

        reviewImage.src = data.image;
        reviewImage.alt = data.name;

        clientName.textContent = data.name;
        clientCity.textContent = data.location;

        reviewText.textContent = data.text;

        reviewName.textContent = data.name;
        reviewLocation.textContent = data.location;

        reviewImage.style.opacity = "1";
        reviewText.style.opacity = "1";

    },250);

}

/*==================================================
PLATFORM CLICK
==================================================*/

platformCards.forEach(card=>{

    card.addEventListener("click",()=>{

        platformCards.forEach(item=>{
            item.classList.remove("active");
        });

        card.classList.add("active");

        changeReview(card.dataset.platform);

        currentIndex = platforms.indexOf(card.dataset.platform);

    });

});

/*==================================================
AUTO SLIDER
==================================================*/

const platforms = [
    "google",
    "facebook",
    "video",
    "whatsapp"
];

let currentIndex = 0;

let slider = setInterval(nextSlide,5000);

function nextSlide(){

    currentIndex++;

    if(currentIndex >= platforms.length){
        currentIndex = 0;
    }

    platformCards.forEach(item=>{
        item.classList.remove("active");
    });

    document
    .querySelector(`[data-platform="${platforms[currentIndex]}"]`)
    .classList.add("active");

    changeReview(platforms[currentIndex]);

}

/*==================================================
PAUSE ON HOVER
==================================================*/

const testimonialSection =
document.querySelector(".testimonials-section");

testimonialSection.addEventListener("mouseenter",()=>{

    clearInterval(slider);

});

testimonialSection.addEventListener("mouseleave",()=>{

    slider = setInterval(nextSlide,5000);

});

/*==================================================
SCROLL ANIMATION
==================================================*/

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(
".featured-review,.platform-card,.trust-card"
).forEach(item=>{

    item.classList.add("fade-item");

    observer.observe(item);

});

/*==================================================
INITIAL LOAD
==================================================*/

changeReview("google");