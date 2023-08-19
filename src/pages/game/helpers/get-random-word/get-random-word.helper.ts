import wordCategories from '../../../../assets/data/wordCategories.json';
import { Word, WordCategory } from '../../../../common/interfaces/interfaces';

const getRandomWord = (): Word => {
  const catRandomIndex = Math.floor(Math.random() * wordCategories.length);
  const category: WordCategory = wordCategories[catRandomIndex];

  const words = category.words;
  const wordRandomIndex = Math.floor(Math.random() * words.length);

  return { title: words[wordRandomIndex], category: category.category };
};

export { getRandomWord };
