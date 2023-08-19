const isLetterUsed = (usedLetters: string[], letter: string): boolean =>
    Boolean(usedLetters.find((lt) => lt.toLowerCase() === letter.toLowerCase())
);

export { isLetterUsed };