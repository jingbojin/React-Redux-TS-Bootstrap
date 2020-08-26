import {
  EQuestionType,
  IApiQuestionsPayload,
  IQuestion,
} from '../../types/Interface';

/**
 * This file is used to generate the `public/test_data.json`.
 * Feel free to add/remove/update the question list, and then run
 * `JSON.stringify(apiPayload)`. Copy and paste the output to `public/test_data.json`.
 *
 * The advantage of using this file is it is Type guarded by TS, to ensure every
 * record has the correct types & fields.
 */

export const q1: IQuestion = {
  orderId: 1,
  type: EQuestionType.singleSelect,
  questionText: 'Julius Caesar was the first emperor of Rome.',
  options: [
    {
      key: 'A',
      value: 'A) No',
    },
    {
      key: 'B',
      value: 'B) Yes',
    }
  ],
};
const q2: IQuestion = {
  orderId: 2,
  type: EQuestionType.freeText,
  questionText: '10*29*32*11 = ?',
};

export const q3: IQuestion = {
  orderId: 3,
  type: EQuestionType.multiCheckbox,
  questionText: 'Who is the Australian actor?',
  options: [
    {
      key: 'A',
      value: 'A) Nicole Kidman',
    },
    {
      key: 'B',
      value: 'B) Tom Hanks',
    },
    {
      key: 'C',
      value: 'C) Robert Jr.',
    },
    {
      key: 'D',
      value: 'D) Chirs Hamswas',
    }
  ],
};

const q4: IQuestion = {
  orderId: 4,
  type: EQuestionType.singleSelect,
  questionText: 'What is the name of Jon Snow’s direwolf?',
  options: [
    {
      key: 'A',
      value: 'A)  Grey Wind',
    },
    {
      key: 'B',
      value: 'B)  Nymeria',
    },
    {
      key: 'C',
      value: 'C)  Summer',
    },
    {
      key: 'D',
      value: 'D)  Ghost',
    },
  ],
};

const q5: IQuestion = {
  orderId: 5,
  type: EQuestionType.freeText,
  questionText: '‘All men must die’ translates as what term in High Valyrian?',
};
const q6: IQuestion = {
  orderId: 6,
  type: EQuestionType.multiCheckbox,
  questionText: 'Who is from house of stack?',
  options: [
    {
      key: 'A',
      value: 'A) Jon',
    },
    {
      key: 'B',
      value: 'B) Bran',
    },
    {
      key: 'C',
      value: 'C) Arya',
    },
    {
      key: 'D',
      value: 'D) Sansa',
    },
    {
      key: 'E',
      value: 'E) Cersei',
    }
  ],
};
const q7: IQuestion = {
  orderId: 7,
  type: EQuestionType.singleSelect,
  questionText: 'The Narrow Sea separates Essos and which continent?',
  options: [
    {
      key: 'A',
      value: 'A) Dorne',
    },
    {
      key: 'B',
      value: 'B) Qarth',
    },
    {
      key: 'C',
      value: 'C) Westeros',
    },
    {
      key: 'D',
      value: 'D) Esteros',
    }
  ],
};

const q8: IQuestion = {
  orderId: 8,
  type: EQuestionType.freeText,
  questionText: '(Big Bang Theory) What was the name of the workplace where Penny and Bernadette met?',
};

const q9: IQuestion = {
  orderId: 9,
  type: EQuestionType.singleSelect,
  questionText: "Which Of The Following Is NOT One Of Howard's Nicknames?",
  options: [
    {
      key: 'A',
      value: 'A) Howie',
    },
    {
      key: 'B',
      value: 'B) Fruit Loops',
    },
    {
      key: 'C',
      value: 'C) Wolowizard',
    },
    {
      key: 'D',
      value: 'D) Ward',
    }
  ],
};
const q10: IQuestion = {
  orderId: 10,
  type: EQuestionType.singleSelect,
  questionText: "What Video Game Did Penny Become Addicted To?",
  options: [
    {
      key: 'A',
      value: 'A) World of Warcraft',
    },
    {
      key: 'B',
      value: 'B) Age of Conan',
    },
    {
      key: 'C',
      value: 'C) Secret World Legends',
    },
    {
      key: 'D',
      value: 'D) Dark Age of Camelot',
    }
  ],
};

export const apiPayload: IApiQuestionsPayload = {
  testName: 'Who Wants to Be a Millionaire?',
  questionList: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10],
  pageControl: {
    numPerPage: 3,
  },
};


