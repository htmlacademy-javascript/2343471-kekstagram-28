const { name } = require("browser-sync");

const id = [
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
];

const avatar = [
'img/avatar-1.svg',
'img/avatar-2.svg',
'img/avatar-3.svg',
'img/avatar-4.svg',
'img/avatar-5.svg',
'img/avatar-6.svg',
];

const message = [
'В целом всё неплохо. Но не всё.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
'В конце концов это просто непрофессионально.',
];

const name = [
'Егор',
'Дима',
'Миша',
'Юра',
'Анна',
'Инна',
'Алексей',
'Кирилл',
'Маргарита',
];

const description = [

];


//кол-во описаний для генериации
const descriptions_count = 25;

const generatePhotoId = createIdFromRangeGenerator(1, 25);
const generateCommentId = createIdFromRangeGenerator(1, 100000);

//функция для создания обьектов comments
function createComments () {
  return {
    id: generateCommentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg.`,
    message: comments_text[getRandomInteger(0, comment_text.length - 1)],
    name: names[getrandomInteger(0, names.length - 1)],
};
}

//функция сохдания описания фото
function createPhotoDescription () {
  return {
    id: generatePhotoId(),
    url: `photos/${getRandomInteger(1, 25)}.jpg`,
    description: descriptions[getRandomInteger(0, descriptions.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: 2}, createComments),
  };
}

//массив на 25 обьектов
const createPhotoDescriptions = () => Array.from({length: descriptions_count}, createPhotoDescriptions);

//функция для генерации случайных чисел
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower +1) + lower;

  return Math.floor(result);
}

//функция получения неповторяющихся чисел
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValue.length >= (max - min + 1)) {
      return null;
    }
    while (previousValue.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

/*const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};*/


/*const dataGeneration = () => {
  const
  const
  const
  const
  const

return {
id: '',
avatar: '',
message: '',
name: '',
};
};
*/
