
gsap.to("#center-div", {
  scrollTrigger:{
    trigger:"#wrapper",
    //  markers:true,
    //  pin:true,
     start:"10% top",
     scrub:1,
     end:"40% 50%"
  },
  height:"100%",

  })

var tl = gsap.timeline({
 scrollTrigger:{
    trigger:"#media",
    //  markers:true,
     pin:true,
     start:"5% top",
     scrub:3
  }
})

.to("#center-div", {
  width:"100%",

  });

  gsap.to(".a", {
    scrollTrigger:{
      trigger:"#media",
      //  markers:true,
      //  pin:true,
       start:"top top",
       scrub:3
    },
      marginLeft:"-30vw",
      delay:2
    });  
    gsap.to(".b", {
      scrollTrigger:{
        trigger:"#media",
        //  markers:true,
        //  pin:true,
         start:"top top",
         scrub:3
      },
      transform: "translateX(35vw)",
      delay:2

      });      