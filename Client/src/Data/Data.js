// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilTemperaturePlus, UilRaindropsAlt, UilWater  } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Temperature",
    color: {
      backGround: "linear-gradient(180deg, #ba2f13 0%, #ba5313 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 40,
    value: "33°C",
    png: UilTemperaturePlus,
    series: [
      {
        name: "Temp",
        data: [28, 32, 31, 30, 33, 32, 33],
      },
    ],
  },
  {
    title: "Humidity",
    color: {
      backGround: "linear-gradient(180deg, #fcba03 0%, #c98d0a 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 30,
    value: "30%",
    png: UilWater ,
    series: [
      {
        name: "Humidity",
        data: [28, 30, 27, 33, 29, 30, 29],
      },
    ],
  },
  {
    title: "Moisture",
    color: {
      backGround: "linear-gradient(180deg, #0339fc 0%, #0377fc 100%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 25,
    value: "25%",
    png: UilRaindropsAlt ,
    series: [
      {
        name: "Moisture",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
