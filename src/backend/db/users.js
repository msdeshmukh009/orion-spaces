import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Adarsh the Balika",
    website: "https://adarshbalika.netlify.app/",
    profileUrl: "https://avatars.dicebear.com/api/avataaars/dqwzfgvbzsaaxvbbaqcustom-seed.svg",
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
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
    _id: uuid(),
    firstName: "Joseph ",
    lastName: "Joestar",
    username: "jojo_2",
    password: "Jojo@999",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "And that’s why I turned one of your pistols into a banana. It’s your last meal. Take your time… enjoy it.",
    website: "",
    profileUrl: "https://pbs.twimg.com/profile_images/1171546495704809473/1hgA0eJ3_400x400.jpg",
    followers: [],
    following: [],
  },

  {
    _id: uuid(),
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
    followers: [],
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
