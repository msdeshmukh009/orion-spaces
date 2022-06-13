import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Hello! I am Adarsh Balika. I completed Mark 15 project when I was 3years old. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshbalika",
    createdAt: "02:48 PM May 25,2016",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens. ",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "38fb22a8-e7ff-437c-9cad-dc64a43984d5",
          firstName: "Adarsh",
          lastName: "Balika",
          username: "adarshbalika",
          profileUrl:
            "https://avatars.dicebear.com/api/avataaars/dqwzfgvbzsaaxvbbaqcustom-seed.svg",
        },
        {
          _id: "3be73b88-5d09-4b44-babc-f9d8b768adf6",
          firstName: "Jonathan",
          lastName: "Joestar",
          username: "jojo_1",
          profileUrl:
            "https://res.cloudinary.com/dxebdqoxr/image/upload/v1652610493/orion-spaces/jonathan_catdha.jpg",
        },
        {
          _id: "070db363-dfbf-48c6-82f1-146071f08d4f",
          firstName: "Joseph ",
          lastName: "Joestar",
          username: "jojo_2",
          profileUrl:
            "https://res.cloudinary.com/dxebdqoxr/image/upload/v1652987212/orion-spaces/jojo_2_dwhb1p.jpg",
        },
      ],
      dislikedBy: [],
    },
    comments: [],
    username: "jojo_2",
    createdAt: "02:48 PM January 10,2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Success is not final, failure is not fatal: it is the courage to continue that counts. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        content: "Maybe, I have different opinion",
        _id: uuid(),
        username: "jojo_2",
        createdAt: formatDate(),
      },
    ],
    username: "adarshbalika",
    createdAt: "02:00 AM May 25,2021",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At the end of the day, whether or not those people are comfortable with how you’re living your life doesn’t matter. What matters is whether you’re comfortable with it.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "jojo_3",
    createdAt: "04:48 PM May 15,2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "dio_kills",
    createdAt: "02:48 PM May 10,2022",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "jojo_1",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I like criticism. It makes you strong.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "jojo_3",
    createdAt: "02:48 PM May 18,2021",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "In Search of new world 🚀",
    postImageUrl:
      "https://res.cloudinary.com/dxebdqoxr/image/upload/v1654092107/orion-spaces/zurn7uksaqphjclg6eqc.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "jojo_3",
    createdAt: "02:48 PM May 30,2022",
    updatedAt: formatDate(),
  },
];
