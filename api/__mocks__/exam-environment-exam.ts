import { Static } from '@fastify/type-provider-typebox';
import {
  ExamEnvironmentConfig,
  ExamEnvironmentQuestionType,
  ExamEnvironmentExamAttempt,
  ExamEnvironmentExam,
  ExamEnvironmentGeneratedExam,
  ExamEnvironmentQuestionSet
} from '@prisma/client';
import { ObjectId } from 'mongodb';
// import { defaultUserId } from '../jest.utils';
import { examEnvironmentPostExamAttempt } from '../src/exam-environment/schemas';
// import { generateExam } from '../src/exam-environment/utils/exam';

export const oid = () => new ObjectId().toString();

const defaultUserId = '64c7810107dd4782d32baee7';

export const examId = oid();

export const config: ExamEnvironmentConfig = {
  totalTimeInMS: 2 * 60 * 60 * 1000,
  tags: [],
  name: 'Test Exam',
  note: 'Some exam note...',
  passingPercent: 80,
  questionSets: [
    {
      type: ExamEnvironmentQuestionType.MultipleChoice,
      numberOfSet: 1,
      numberOfQuestions: 1,
      numberOfCorrectAnswers: 1,
      numberOfIncorrectAnswers: 1
    },
    {
      type: ExamEnvironmentQuestionType.MultipleChoice,
      numberOfSet: 1,
      numberOfQuestions: 1,
      numberOfCorrectAnswers: 2,
      numberOfIncorrectAnswers: 1
    },
    {
      type: ExamEnvironmentQuestionType.Dialogue,
      numberOfSet: 1,
      numberOfQuestions: 2,
      numberOfCorrectAnswers: 1,
      numberOfIncorrectAnswers: 1
    }
  ],
  retakeTimeInMS: 24 * 60 * 60 * 1000
};

export const questionSets: ExamEnvironmentQuestionSet[] = [
  {
    id: oid(),
    type: ExamEnvironmentQuestionType.MultipleChoice,
    context: null,
    questions: [
      {
        id: oid(),
        tags: ['q1t1'],
        text: 'Question 1',
        deprecated: false,
        audio: null,
        answers: [
          {
            id: oid(),
            text: 'Answer 1',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 2',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 3',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    id: oid(),
    type: ExamEnvironmentQuestionType.MultipleChoice,
    context: null,
    questions: [
      {
        id: oid(),
        tags: [],
        text: 'Question 1',
        deprecated: false,
        audio: null,
        answers: [
          {
            id: oid(),
            text: 'Answer 1',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 2',
            isCorrect: false
          },
          {
            id: oid(),
            text: 'Answer 3',
            isCorrect: false
          }
        ]
      }
    ]
  },
  {
    id: oid(),
    type: ExamEnvironmentQuestionType.Dialogue,
    context: 'Dialogue 1 context',
    questions: [
      {
        id: oid(),
        tags: ['q1t1'],
        text: 'Question 1',
        deprecated: false,
        audio: null,
        answers: [
          {
            id: oid(),
            text: 'Answer 1',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 2',
            isCorrect: false
          },
          {
            id: oid(),
            text: 'Answer 3',
            isCorrect: false
          }
        ]
      },
      {
        id: oid(),
        tags: ['q2t1', 'q2t2'],
        text: 'Question 2',
        deprecated: true,
        audio: {
          url: 'https://freecodecamp.org',
          captions: null
        },
        answers: [
          {
            id: oid(),
            text: 'Answer 1',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 2',
            isCorrect: false
          },
          {
            id: oid(),
            text: 'Answer 3',
            isCorrect: false
          }
        ]
      },
      {
        id: oid(),
        tags: ['q3t1', 'q3t2'],
        text: 'Question 3',
        deprecated: false,
        audio: null,
        answers: [
          {
            id: oid(),
            text: 'Answer 1',
            isCorrect: true
          },
          {
            id: oid(),
            text: 'Answer 2',
            isCorrect: false
          },
          {
            id: oid(),
            text: 'Answer 3',
            isCorrect: false
          }
        ]
      }
    ]
  }
];

export const generatedExam: ExamEnvironmentGeneratedExam = {
  examId,
  id: oid(),
  deprecated: false,
  questionSets: [
    {
      id: questionSets[0]!.id,
      questions: [
        {
          id: questionSets[0]!.questions[0]!.id,
          answers: [
            questionSets[0]!.questions[0]!.answers[0]!.id,
            questionSets[0]!.questions[0]!.answers[1]!.id
          ]
        }
      ]
    },
    {
      id: questionSets[1]!.id,
      questions: [
        {
          id: questionSets[1]!.questions[0]!.id,
          answers: [
            questionSets[1]!.questions[0]!.answers[0]!.id,
            questionSets[1]!.questions[0]!.answers[1]!.id,
            questionSets[1]!.questions[0]!.answers[2]!.id
          ]
        }
      ]
    },
    {
      id: questionSets[2]!.id,
      questions: [
        {
          id: questionSets[2]!.questions[0]!.id,
          answers: [
            questionSets[2]!.questions[0]!.answers[0]!.id,
            questionSets[2]!.questions[0]!.answers[1]!.id,
            questionSets[2]!.questions[0]!.answers[2]!.id
          ]
        },
        {
          id: questionSets[2]!.questions[1]!.id,
          answers: [
            questionSets[2]!.questions[1]!.answers[0]!.id,
            questionSets[2]!.questions[1]!.answers[1]!.id,
            questionSets[2]!.questions[1]!.answers[2]!.id
          ]
        }
      ]
    }
  ]
};

export const examAttempt: ExamEnvironmentExamAttempt = {
  examId,
  generatedExamId: generatedExam.id,
  id: oid(),
  questionSets: [
    {
      id: generatedExam.questionSets[0]!.id,
      questions: [
        {
          id: generatedExam.questionSets[0]!.questions[0]!.id,
          answers: [generatedExam.questionSets[0]!.questions[0]!.answers[0]!],
          submissionTimeInMS: Date.now()
        }
      ]
    },
    {
      id: generatedExam.questionSets[1]!.id,
      questions: [
        {
          id: generatedExam.questionSets[1]!.questions[0]!.id,
          answers: [generatedExam.questionSets[1]!.questions[0]!.answers[1]!],
          submissionTimeInMS: Date.now()
        }
      ]
    },
    {
      id: generatedExam.questionSets[2]!.id,
      questions: [
        {
          id: generatedExam.questionSets[2]!.questions[0]!.id,
          answers: [generatedExam.questionSets[2]!.questions[0]!.answers[1]!],
          submissionTimeInMS: Date.now()
        },
        {
          id: generatedExam.questionSets[2]!.questions[1]!.id,
          answers: [generatedExam.questionSets[2]!.questions[1]!.answers[0]!],
          submissionTimeInMS: Date.now()
        }
      ]
    }
  ],
  startTimeInMS: Date.now(),
  userId: defaultUserId
};

export const examAttemptSansSubmissionTimeInMS: Static<
  typeof examEnvironmentPostExamAttempt.body
>['attempt'] = {
  examId,
  questionSets: [
    {
      id: generatedExam.questionSets[0]!.id,
      questions: [
        {
          id: generatedExam.questionSets[0]!.questions[0]!.id,
          answers: [generatedExam.questionSets[0]!.questions[0]!.answers[0]!]
        }
      ]
    },
    {
      id: generatedExam.questionSets[1]!.id,
      questions: [
        {
          id: generatedExam.questionSets[1]!.questions[0]!.id,
          answers: [generatedExam.questionSets[1]!.questions[0]!.answers[1]!]
        }
      ]
    },
    {
      id: generatedExam.questionSets[2]!.id,
      questions: [
        {
          id: generatedExam.questionSets[2]!.questions[0]!.id,
          answers: [generatedExam.questionSets[2]!.questions[0]!.answers[1]!]
        },
        {
          id: generatedExam.questionSets[2]!.questions[1]!.id,
          answers: [generatedExam.questionSets[2]!.questions[1]!.answers[0]!]
        }
      ]
    }
  ]
};

export const exam: ExamEnvironmentExam = {
  id: examId,
  config,
  questionSets,
  prerequisites: ['67112fe1c994faa2c26d0b1d'],
  deprecated: false
};

export async function seedEnvExam() {
  await clearEnvExam();

  await fastifyTestInstance.prisma.examEnvironmentExam.create({
    data: exam
  });
  await fastifyTestInstance.prisma.examEnvironmentGeneratedExam.create({
    data: generatedExam
  });

  // TODO: This would be nice to use, but the test logic for examAttempt need to account
  //       for dynamic ids.
  // let numberOfExamsGenerated = 0;
  // while (numberOfExamsGenerated < 2) {
  //   try {
  //     const generatedExam = generateExam(exam);
  //     await fastifyTestInstance.prisma.examEnvironmentGeneratedExam.create({
  //       data: generatedExam
  //     });
  //     numberOfExamsGenerated++;
  //   } catch (_e) {
  //     //
  //   }
  // }
}

export async function clearEnvExam() {
  await fastifyTestInstance.prisma.examEnvironmentExamAttempt.deleteMany({});
  await fastifyTestInstance.prisma.examEnvironmentGeneratedExam.deleteMany({});
  await fastifyTestInstance.prisma.examEnvironmentExam.deleteMany({});
}

export async function seedEnvExamAttempt() {
  await fastifyTestInstance.prisma.examEnvironmentExamAttempt.create({
    data: examAttempt
  });
}

export async function seedExamEnvExamAuthToken() {
  return fastifyTestInstance.prisma.examEnvironmentAuthorizationToken.create({
    data: { userId: defaultUserId, expireAt: new Date(Date.now() + 60000) }
  });
}
