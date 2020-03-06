const notes = {
  c: document.querySelectorAll("audio")[0],
  d: document.querySelectorAll("audio")[1],
  e: document.querySelectorAll("audio")[2],
  f: document.querySelectorAll("audio")[3],
  g: document.querySelectorAll("audio")[4],
  a: document.querySelectorAll("audio")[5],
  b: document.querySelectorAll("audio")[6],
  c2: document.querySelectorAll("audio")[7]
};

const note = [
  notes.c,
  notes.d,
  notes.e,
  notes.f,
  notes.g,
  notes.a,
  notes.b,
  notes.c2
];

const pianoKeys = {
  c: document.querySelectorAll(".key")[0],
  d: document.querySelectorAll(".key")[1],
  e: document.querySelectorAll(".key")[2],
  f: document.querySelectorAll(".key")[3],
  g: document.querySelectorAll(".key")[4],
  a: document.querySelectorAll(".key")[5],
  b: document.querySelectorAll(".key")[6],
  c2: document.querySelectorAll(".key")[7]
};

const pianoKey = [
  pianoKeys.c,
  pianoKeys.d,
  pianoKeys.e,
  pianoKeys.f,
  pianoKeys.g,
  pianoKeys.a,
  pianoKeys.b,
  pianoKeys.c2
];

// play piano with mouse
pianoKey.forEach(item => {
  item.addEventListener("mousedown", function press() {
    item.classList.add("key-down");
    const keyNumber = pianoKey.indexOf(item);
    return playPiano(keyNumber);
  });
  item.addEventListener("touchstart", function press() {
    item.classList.add("key-down");
    const keyNumber = pianoKey.indexOf(item);
    return playPiano(keyNumber);
  });
  item.addEventListener("mouseup", function press() {
    item.classList.remove("key-down");
    const keyNumber = pianoKey.indexOf(item);
    return pausePiano(keyNumber);
  });
  item.addEventListener("mouseleave", function press() {
    item.classList.remove("key-down");
    const keyNumber = pianoKey.indexOf(item);
    return pausePiano(keyNumber);
  });
  item.addEventListener("touchend", function press() {
    item.classList.remove("key-down");
    const keyNumber = pianoKey.indexOf(item);
    return pausePiano(keyNumber);
  });
});

// play piano with keyboard

function playPiano(keyNumber) {
  switch (keyNumber) {
    case 0:
      notes.c.currentTime = 1;

      let playPromise = new Promise((resolve, reject) => {
        resolve(notes.c.play());
      });

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("hi");
            notes.c.play();
          })
          .catch(() => console.log("error"));
      }
      break;
    case 1:
      notes.d.currentTime = 1;
      notes.d.play();
      break;
    case 2:
      notes.e.currentTime = 1;
      notes.e.play();
      break;
    case 3:
      notes.f.currentTime = 1;
      notes.f.play();
      break;
    case 4:
      notes.g.currentTime = 1;
      notes.g.play();
      break;
    case 5:
      notes.a.currentTime = 1;
      notes.a.play();
      break;
    case 6:
      notes.b.currentTime = 1;
      notes.b.play();
      break;
    case 7:
      notes.c2.currentTime = 1;
      notes.c2.play();
      break;
  }
}
function pausePiano(keyNumber) {
  switch (keyNumber) {
    case 0:
      notes.c.pause();
      notes.c.currentTime = 0;

      break;
    case 1:
      notes.d.pause();
      notes.d.currentTime = 0;
      break;
    case 2:
      notes.e.pause();
      notes.e.currentTime = 0;
      break;
    case 3:
      notes.f.pause();
      notes.f.currentTime = 0;
      break;
    case 4:
      notes.g.pause();
      notes.g.currentTime = 0;
      break;
    case 5:
      notes.a.pause();
      notes.a.currentTime = 0;
      break;
    case 6:
      notes.b.pause();
      notes.b.currentTime = 0;
      break;
    case 7:
      notes.c2.pause();
      notes.c2.currentTime = 0;
      break;
  }
}

// vvvv code from stack overflow start
// create an array with 222 (number of keycodes) values set to true
{
  let keyEnabledArray = Array(333).fill(true);

  document.onkeydown = function(e) {
    // disable the key until key release
    if (keyEnabledArray[e.keyCode]) {
      keyEnabledArray[e.keyCode] = false;
      playWithKeyboard(e);
    }
  };

  document.onkeyup = function(e) {
    // enable the specific key on keyup
    keyEnabledArray[e.keyCode] = true;
    pauseWithKeyboard(e);
  };
}
// vvvv code from stack overflow end

function playWithKeyboard(e) {
  switch (e.code) {
    case "KeyA":
      notes.c.currentTime = 2;
      pianoKey[0].classList.add("key-down");
      notes.c.play();
      break;
    case "KeyS":
      notes.d.currentTime = 1;
      pianoKey[1].classList.add("key-down");
      notes.d.play();
      break;
    case "KeyD":
      notes.e.currentTime = 1;
      pianoKey[2].classList.add("key-down");
      notes.e.play();
      break;
    case "KeyF":
      notes.f.currentTime = 1;
      pianoKey[3].classList.add("key-down");
      notes.f.play();
      break;
    case "KeyG":
      notes.g.currentTime = 1;
      pianoKey[4].classList.add("key-down");
      notes.g.play();
      break;
    case "KeyH":
      notes.a.currentTime = 1;
      pianoKey[5].classList.add("key-down");
      notes.a.play();
      break;
    case "KeyJ":
      notes.b.currentTime = 1;
      pianoKey[6].classList.add("key-down");
      notes.b.play();
      break;
    case "KeyK":
      notes.c2.currentTime = 1;
      pianoKey[7].classList.add("key-down");
      notes.c2.play();
      break;
  }
}

function pauseWithKeyboard(e) {
  switch (e.code) {
    case "KeyA":
      pianoKey[0].classList.remove("key-down");
      notes.c.pause();
      notes.c.currentTime = 0;
      break;
    case "KeyS":
      pianoKey[1].classList.remove("key-down");
      notes.d.pause();
      notes.d.currentTime = 0;
      break;
    case "KeyD":
      pianoKey[2].classList.remove("key-down");
      notes.e.pause();
      notes.e.currentTime = 0;
      break;
    case "KeyF":
      pianoKey[3].classList.remove("key-down");
      notes.f.pause();
      notes.f.currentTime = 0;
      break;
    case "KeyG":
      pianoKey[4].classList.remove("key-down");
      notes.g.pause();
      notes.g.currentTime = 0;
      break;
    case "KeyH":
      pianoKey[5].classList.remove("key-down");
      notes.a.pause();
      notes.a.currentTime = 0;
      break;
    case "KeyJ":
      pianoKey[6].classList.remove("key-down");
      notes.b.pause();
      notes.b.currentTime = 0;
      break;
    case "KeyK":
      pianoKey[7].classList.remove("key-down");
      notes.c2.pause();
      notes.c2.currentTime = 0;
      break;
  }
}
