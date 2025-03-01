import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaStackOverflow,
} from "react-icons/fa";

export const LINKEDIN_URL = "https://www.linkedin.com/in/sharmarajdaksh/";
export const GITHUB_URL = "https://github.com/sharmarajdaksh";
export const MEDIUM_URL = "https://medium.com/@sharmarajdaksh";
export const EMAIL = "sharmarajdaksh@gmail.com";
export const GOODREADS_URL =
  "https://www.goodreads.com/user/show/21277948-dakshraj-sharma";
export const STACKOVERFLOW_URL =
  "https://stackoverflow.com/users/9134637/dakshraj-sharma";

export const SOCIAL_ICONS_DATA = [
  {
    url: GITHUB_URL,
    label: "Github URL",
    tooltip: "My Github profile",
    icon: FaGithub,
  },
  {
    url: LINKEDIN_URL,
    label: "LinkedIn URL",
    tooltip: "My LinkedIn profile",
    icon: FaLinkedin,
  },
  {
    url: STACKOVERFLOW_URL,
    label: "StackOverflow URL",
    tooltip: "My StackOverflow profile",
    icon: FaStackOverflow,
  },
  {
    url: MEDIUM_URL,
    label: "Medium URL",
    tooltip: "My Medium Profile",
    icon: FaMedium,
  },
];
