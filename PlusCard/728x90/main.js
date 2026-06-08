var tl;
var tl2;
var startTime;


function init() {
  startTime = new Date();
  tl = gsap.timeline({ onComplete: logDuration });
  tl2 = gsap.timeline({});
  animate();
  setRollover();
}

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl.set(["#copy1", "#copy2", "#copy3", "#cta"], { y: 20, autoAlpha: 0 });
  tl2.set(bg, {x:-50, force3D:true})
  tl2.to(bg, 9, {x:0, ease: "none", scale:1.15}, 0)
  tl.addLabel("frame1", 0)
    .to(copy1, 0.5, { autoAlpha: 1, y:0, ease: "power1.inOut" }, "frame1")
    .to(copy1, 0.5, { autoAlpha: 0, ease: "power1.inOut" }, "frame1+=3.5")
    .addLabel("frame2", "frame1+=4")
    .to(copy2, 0.5, { y: 0, autoAlpha: 1, y:0, ease: "power1.inOut"}, "frame2")
    .to(lastFrame, 0.6, { y: 0, ease: Power2.easeOut }, "frame2+=3.5")
    .to(copy3, 0.5, { autoAlpha: 1, y:0,  ease: "power1.inOut" }, ">")
    .to(cta, 0.5, { autoAlpha: 1, y:0,  ease: "power1.inOut" }, ">-=0.05")
    .to(shine, 0.5, { backgroundPosition: '480px 0px' }, "frame4+=1");
}

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", defaultOver, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", defaultOut, false);
}

function defaultOver() {
  gsap.to("#cta", 0.15, { scale: 1.1, ease: Power1.easeInOut });
}

function defaultOut() {
  gsap.to("#cta", 0.15, { scale: 1, ease: Power1.easeInOut });
}


function logDuration() {
  let endTime = new Date();
  console.log(
    "Animation duration: " +
      ((endTime - startTime) / 1000).toFixed(2) +
      " seconds",
  );
}
