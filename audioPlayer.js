var bgm = new Howl({
  src: ['assets/audio/bgm.mp3','assets/audio/bgm.ogg'],
  loop: true
});

var sfx = {
  star: new Howl({
    src: ['assets/audio/star.mp3','assets/audio/star.ogg']
  }),
  swoosh: new Howl({
    src: ['assets/audio/swoosh.mp3','assets/audio/swoosh.ogg']
  }),
  winning: new Howl({
    src: ['assets/audio/winning.mp3','assets/audio/winning.ogg']
  }),
  wrongchoicex: new Howl({
    src: ['assets/audio/wrongchoicex.mp3','assets/audio/wrongchoicex.ogg']
  })
};

var vo = {
  intro: new Howl({
    src: ['assets/audio/intro_01.mp3','assets/audio/intro_01.ogg']
  })
};

function muteBGM(bool muted) {
  bgm.mute(muted);
}

bool isPlaying(int id) {
  return bgm.playing(id);
}

function playBGM() {
  bgm.play();
}
