sounds.load([
  "sounds/POL-yellow-copter-short.wav"
]);

var music = undefined;

// Assign the callback function that should run
// when the sounds have loaded
sounds.whenLoaded = function () {
  music = sounds["sounds/POL-yellow-copter-short.wav"];

  // Make the sound loop
  music.loop = true;

  // Set the volume
  // 1 is full volume, 2 is double volume, 0.5 is half volume, etc.
  music.volume = 0.4;
};

var paddleHitSoundLow = function () {
  soundEffect(587.33, 0, 0.2, "square", 1, 0, 0); // D
}

var paddleHitSoundHigh = function () {
  soundEffect(1174.66, 0, 0.3, "square", 1, 0, 0); //High D
}

var gameEndSound = function () { // this was originally the shootSound()
  soundEffect(
    1046.5,           //frequency
    0,                //attack
    0.3,              //decay
    "sawtooth",       //waveform
    1,                //Volume
    -0.8,             //pan
    0,                //wait before playing
    1200,             //pitch bend amount
    false,            //reverse bend
    0,                //random pitch range
    25,               //dissonance
    [0.2, 0.2, 2000], //echo array: [delay, feedback, filter]
    undefined         //reverb array: [duration, decay, reverse?]
  );
}
