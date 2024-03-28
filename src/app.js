function generateRandomwords(words) {
  let part = words.length;
  let ramdomword = Math.floor(Math.random() * part);

  return words[ramdomword];
}
