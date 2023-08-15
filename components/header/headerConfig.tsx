import { MdMail, MdPhone, MdLocationPin } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import {
  ADDRESS,
  INSTAGRAM_URL,
  MAIL,
  NAVIGATION,
  PHONE,
  ΙΝSTAGRAM,
} from "data/general";

export const headerLinks = [
  { path: `/`, text: "Αρχική" },
  { path: `/services`, text: "Υπηρεσίες" },
  { path: `/about`, text: "Βιογραφικό" },
  { path: `/wiki`, text: "Wiki" },
  { path: `/contact`, text: "Επικοινωνία" },
  // { path: `/themes`, text: "Θέματα" },
];

export const headerInfo = [
  { href: INSTAGRAM_URL, icon: <BsInstagram size={30} />, text: ΙΝSTAGRAM },
  { href: `tel:${PHONE}`, icon: <MdPhone size={30} />, text: PHONE },
  { href: `mailto:${MAIL}`, icon: <MdMail size={30} />, text: MAIL },
  { href: NAVIGATION, icon: <MdLocationPin size={30} />, text: ADDRESS },
];
