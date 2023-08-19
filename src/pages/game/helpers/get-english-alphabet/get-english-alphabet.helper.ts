const getEnglishAlphabet = (): string[] => {
  const englishAlphabet = [];

  for (let i = 65; i <= 90; i++) {
    englishAlphabet.push(String.fromCharCode(i));
  }

  return englishAlphabet;
};

export { getEnglishAlphabet };
