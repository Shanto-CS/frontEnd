


// locomotive scroll function add
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// mouseFollower circle functionality
function mouseFollower(xScale, yScale) {
    window.addEventListener("mousemove", function(info){
        document.querySelector("#mouseBack").style.transform = `translate(${info.clientX}px, ${info.clientY}px) scale(${xScale},${yScale})`
    })
}

// mouseFollower move time shape change 
 var timeOut;
function mouseFollowerShapeChange(){
        var xScale = 1;
        var yScale = 1;

        var xPrev = 0;
        var yPrev = 0; 
    
    window.addEventListener("mousemove",function(info){
       clearTimeout(timeOut)

        xScale = gsap.utils.clamp(.6,1.4,info.clientX - xPrev);
        yScale = gsap.utils.clamp(.6,1.4,info.clientY - yPrev);


        xPrev =  info.clientX;
        yPrev = info.clientY;

        mouseFollower(xScale,yScale)

        timeOut = setTimeout(function(){
        document.querySelector("#mouseBack").style.transform = `translate(${info.clientX}px, ${info.clientY}px) scale(1, 1)`
        }, 100);
    })
}


// hero header anination creation 

function heroHeaderAnimate(){
    var tl = gsap.timeline();
    
    tl.from("#nav", {
        y:'-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    .to(".bound-elem", {
        y: 0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:.4,
        delay:-1.5
    })
    .from("#herofoter", {
        y: 50,
        opacity:0,
        ease:Expo.easeInOut,
        duration:2,
        delay:-1.5
    })
}

// image shows when mouse hover and move into the elemet section

document.querySelectorAll(".elem").forEach(function(elem){
    var shake = 0;
    var diff = 0;
   
    elem.addEventListener("mousemove", function(info){
        diff = info.clientX-shake;
        shake = info.clientX
        
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: info.clientY - elem.getBoundingClientRect().top,
            left: info.clientX - elem.getBoundingClientRect().left,
            rotate: gsap.utils.clamp(-18, 18, diff)
        })
    })
    elem.addEventListener("mouseleave", function(info){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
        })
    })
});



mouseFollowerShapeChange()
// mouseFollower()
heroHeaderAnimate()