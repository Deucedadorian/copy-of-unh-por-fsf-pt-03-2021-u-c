const songs = document.querySelectorAll("#songs li");

for (const song of songs) {
  song.classList.add("green");
  console.log(song.textContent);
}
