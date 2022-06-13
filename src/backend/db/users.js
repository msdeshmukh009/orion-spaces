import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "38fb22a8-e7ff-437c-9cad-dc64a43984d5",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Adarsh the Balika",
    website: "https://adarshbalika.netlify.app/",
    profileUrl: "https://avatars.dicebear.com/api/avataaars/dqwzfgvbzsaaxvbbaqcustom-seed.svg",
    followers: [
      {
        _id: "070db363-dfbf-48c6-82f1-146071f08d4f",
        firstName: "Joseph ",
        lastName: "Joestar",
        username: "jojo_2",
        profileUrl:
          "https://res.cloudinary.com/dxebdqoxr/image/upload/v1652987212/orion-spaces/jojo_2_dwhb1p.jpg",
      },
    ],
    following: [
      {
        _id: "070db363-dfbf-48c6-82f1-146071f08d4f",
        firstName: "Joseph ",
        lastName: "Joestar",
        username: "jojo_2",
        profileUrl:
          "https://res.cloudinary.com/dxebdqoxr/image/upload/v1652987212/orion-spaces/jojo_2_dwhb1p.jpg",
      },
      {
        _id: "a6c14dd6-66f2-4f7f-8a50-c23653bf2832",
        firstName: "Jotaro",
        lastName: "Kujo",
        username: "jojo_3",
        profileUrl:
          "https://res.cloudinary.com/dxebdqoxr/image/upload/v1652527902/orion-spaces/avatars-000693023013-zlgr50-t500x500_pn6ile.jpg",
      },
    ],
  },
  {
    _id: "3be73b88-5d09-4b44-babc-f9d8b768adf6",
    firstName: "Jonathan",
    lastName: "Joestar",
    username: "jojo_1",
    password: "Jojo@999",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Guess who survived his time in hell, Dio.",
    website: "",
    profileUrl:
      "https://res.cloudinary.com/dxebdqoxr/image/upload/v1652610493/orion-spaces/jonathan_catdha.jpg",
    followers: [],
    following: [],
  },
  {
    _id: "070db363-dfbf-48c6-82f1-146071f08d4f",
    firstName: "Joseph ",
    lastName: "Joestar",
    username: "jojo_2",
    password: "Jojo@999",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "And that’s why I turned one of your pistols into a banana. It’s your last meal. Take your time… enjoy it.",
    website: "",
    profileUrl:
      "https://res.cloudinary.com/dxebdqoxr/image/upload/v1652987212/orion-spaces/jojo_2_dwhb1p.jpg",
    followers: [
      {
        _id: "38fb22a8-e7ff-437c-9cad-dc64a43984d5",
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        profileUrl: "https://avatars.dicebear.com/api/avataaars/dqwzfgvbzsaaxvbbaqcustom-seed.svg",
      },
    ],
    following: [
      {
        _id: "a6c14dd6-66f2-4f7f-8a50-c23653bf2832",
        firstName: "Jotaro",
        lastName: "Kujo",
        username: "jojo_3",
        profileUrl:
          "https://res.cloudinary.com/dxebdqoxr/image/upload/v1652527902/orion-spaces/avatars-000693023013-zlgr50-t500x500_pn6ile.jpg",
      },
      {
        _id: "38fb22a8-e7ff-437c-9cad-dc64a43984d5",
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        profileUrl: "https://avatars.dicebear.com/api/avataaars/dqwzfgvbzsaaxvbbaqcustom-seed.svg",
      },
    ],
  },

  {
    _id: "a6c14dd6-66f2-4f7f-8a50-c23653bf2832",
    firstName: "Jotaro",
    lastName: "Kujo",
    username: "jojo_3",
    password: "Jojo@999",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "yare yare daze",
    website: "",
    profileUrl:
      "https://res.cloudinary.com/dxebdqoxr/image/upload/v1652527902/orion-spaces/avatars-000693023013-zlgr50-t500x500_pn6ile.jpg",
    followers: [
      {
        _id: "38fb22a8-e7ff-437c-9cad-dc64a43984d5",
        firstName: "Adarsh",
        lastName: "Balika",
        username: "adarshbalika",
        profileUrl: "https://avatars.dicebear.com/api/avataaars/dqwzfgvbzsaaxvbbaqcustom-seed.svg",
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
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Dio",
    lastName: "Brando",
    username: "dio_kills",
    password: "Jojo@999",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Joestars!!",
    website: "",
    profileUrl:
      "https://res.cloudinary.com/dxebdqoxr/image/upload/v1652610170/orion-spaces/dio_gs98b3.jpg",
    followers: [],
    following: [],
  },
];
