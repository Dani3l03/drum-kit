function playDrum(event) {
  const eventKey = event.key;
  const audio = document.querySelector(`audio[data-key="${eventKey}"]`);
  const key = document.querySelector(`.key[data-key="${eventKey}"]`);
  if (!audio) {
    return;
  } else {
    audio.currentTime = 0; // toda vez que aperta ele reseta o áudio para 0 segundos.
    audio.play();
    key.classList.add("playing");
  }
}

function removeClass() {
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeClass));
addEventListener("keydown", playDrum);

keys.forEach((key) =>
  key.addEventListener("click", function () {
    const dataKey = this.getAttribute("data-key");
    console.log(dataKey);
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    if (!audio) {
      return;
    } else {
      audio.currentTime = 0; // toda vez que aperta ele reseta o áudio para 0 segundos.
      audio.play();
      key.classList.add("playing");
    }
  })
);
