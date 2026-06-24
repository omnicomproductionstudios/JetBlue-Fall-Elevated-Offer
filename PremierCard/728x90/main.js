var tl;
var startTime;

function init() {
  startTime = new Date();

  tl = gsap.timeline({
    onComplete: logDuration
  });

  animate();
  setRollover();
}

function animate() {
  tl.set("#main_content", {
    autoAlpha: 1,
    force3D: true
  });

  tl.set(["#copy1", "#copy2", "#copy3", "#cta"], {
    y: 20,
    autoAlpha: 0
  });

  tl.set(bg, {
    x: -30,
    force3D: true
  });

  tl.set(flare, {
    force3D: true
  });

  // Background animation
  tl.to(bg, {
    duration: 9,
    x: 0,
    ease: "none"
  }, 0);

  // Flare animation
  tl.to(flare, {
    duration: 4,
    scale: 0.9,
    yoyo: true,
    repeat: 3,
    ease: "sine.inOut"
  }, 0);

  // Frame 1
  tl.addLabel("frame1", 0)

    .to(copy1, {
      duration: 0.5,
      autoAlpha: 1,
      y: 0,
      ease: "power1.inOut"
    }, "frame1")

    .to(copy1, {
      duration: 0.5,
      autoAlpha: 0,
      ease: "power1.inOut"
    }, "frame1+=3.5")

    // Frame 2
    .addLabel("frame2", "frame1+=4")

    .to(copy2, {
      duration: 0.5,
      autoAlpha: 1,
      y: 0,
      ease: "power1.inOut"
    }, "frame2")

    .to(lastFrame, {
      duration: 0.6,
      y: 0,
      ease: "power2.out"
    }, "frame2+=3.5")

    .to([copy3, cta], {
      duration: 0.5,
      autoAlpha: 1,
      y: 0,
      ease: "power1.inOut"
    }, ">")

    .to(shine, {
      duration: 0.5,
      backgroundPosition: "600px 0px"
    }, ">+=0.5");
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
  gsap.to("#cta", {
    duration: 0.15,
    scale: 1.1,
    ease: "power1.inOut"
  });
}

function defaultOut() {
  gsap.to("#cta", {
    duration: 0.15,
    scale: 1,
    ease: "power1.inOut"
  });
}

function logDuration() {
  var endTime = new Date();

  console.log(
    "Animation duration: " +
      ((endTime - startTime) / 1000).toFixed(2) +
      " seconds"
  );
}