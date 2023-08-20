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
  { divId: `#home`, text: "Home" },
  { divId: `#about`, text: "About" },
  { divId: `#projects`, text: "Projects" },
  { divId: `#contact`, text: "Contact" },
  { divId: `/themes`, text: "Themes" },
];

export const headerInfo = [
  { href: INSTAGRAM_URL, icon: <BsInstagram size={30} />, text: ΙΝSTAGRAM },
  { href: `tel:${PHONE}`, icon: <MdPhone size={30} />, text: PHONE },
  { href: `mailto:${MAIL}`, icon: <MdMail size={30} />, text: MAIL },
  { href: NAVIGATION, icon: <MdLocationPin size={30} />, text: ADDRESS },
];
