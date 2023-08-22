const isLetterContained = (letters: string[], letter: string): boolean =>
  Boolean(letters.find((lt) => lt.toLowerCase() === letter.toLowerCase()));

export { isLetterContained };
