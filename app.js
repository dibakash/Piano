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

note.forEach(item => {
  let playPromise = item.play();
  item.pause();
  // In browsers that don’t yet support this functionality,
  // playPromise won’t be defined.
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        note.forEach(item => {
          item.pause();
        });
      })

      .catch(function(error) {
        console.log(error);
      });
  }
});
