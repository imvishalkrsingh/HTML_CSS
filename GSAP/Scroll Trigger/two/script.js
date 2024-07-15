


const t1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".trigger",
        start: "top top",
        end: "+=1000",
        scrub:1,
        pin:true,
        markers:true,
    }
})

t1.to(".box",{yPercent: 350, duration: 1})
t1.to(".box",{rotation: 360, duration: 3})
t1.to(".box",{xPercent: 350, duration: 1})