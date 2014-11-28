sounds.load([
  "sounds/POL-yellow-copter-short.wav"
]);

//Assign the callback function that should run
//when the sounds have loaded
sounds.whenLoaded = function () {
  var music = sounds["sounds/POL-yellow-copter-short.wav"];

  //Make the sound loop
  music.loop = true;

  //Play the sound
  music.play();
};
