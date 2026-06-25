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
  // tl2.set(bg, {x:0, force3D:true})
  // tl.set(flare, { force3D: true});
  // tl2.to(bg, 9, {x:-20, ease: "none",}, 0)
  // tl.to(flare, { duration: 4, y:-2, rotate:1, yoyo: true, repeat: 3, ease: "sine.inOut" }, 0);
  tl.addLabel("frame1", 0)
    .to(copy1, 0.5, { autoAlpha: 1, y:0, ease: "power1.inOut" }, "frame1")
    .to(copy1, 0.5, { autoAlpha: 0, ease: "power1.inOut" }, "frame1+=3.5")
    .addLabel("frame2", "frame1+=4")
    .to(copy2, 0.5, { y: 0, autoAlpha: 1, y:0, ease: "power1.inOut"}, "frame2")
    .to(lastFrame, 0.6, { y: 0, ease: Power2.easeOut }, "frame2+=3.5")
    .to([copy3, cta], 0.5, { autoAlpha: 1, y:0,  ease: "power1.inOut" }, ">")
    .to(shine, 1, { backgroundPosition: '166px -110px' }, "frame2+=5");
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
