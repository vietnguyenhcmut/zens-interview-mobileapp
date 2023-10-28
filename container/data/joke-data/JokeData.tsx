export type DataType = {
  id: number,
  jokeContent: string,
}

export const Data: DataType[] = [
  {
    id: 0,
    jokeContent: "A child asked his father, \"How were people born?\" So his father said, \"Adam and Eve made babies, then their babies became adults and made babies, and so on. \n\"The child then went to his mother, asked her the same question and she told him, \"We were monkeys then we evolved to become like we are now. \n\"The child ran back to his father and said, \"You lied to me!\" His father replied, \"No, your mom was talking about her side of the family.\""
  },
  {
    id: 1,
    jokeContent: "Teacher: \"Kids,what does the chicken give you?\" \nStudent: \"Meat!\" \nTeacher: \"Very good! Now what does the pig give you?\" \nStudent: \"Bacon!\" \nTeacher: \"Great! And what does the fat cow give you?\" \nStudent: \"Homework!\""
  },
  {
    id: 2,
    jokeContent: "The teacher asked Jimmy, \"Why is your cat at school today Jimmy?\" \nJimmy replied crying, \"Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'\""
  },
  {
    id: 3,
    jokeContent: "A housewife, an accountant and a lawyer were asked \"How much is 2+2?\" \nThe housewife replies: \"Four!\". \nThe accountant says: \"I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time.\" \nThe lawyer pulls the drapes, dims the lights and asks in a hushed voice, \"How much do you want it to be?\""
  }
];

export const DataLength = Data.length;

export const NoneData = "That's all the jokes for today! Come back another day!";