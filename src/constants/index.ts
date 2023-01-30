import BookmarkFillIcon from "@/assets/icons/BookmarkFillIcon";
import BookmarkOutlineIcon from "@/assets/icons/BookmarkOutlineIcon";
import ExploreFillIcon from "@/assets/icons/ExploreFillIcon";
import ExploreOutlineIcon from "@/assets/icons/ExploreOutlineIcon";
import HomeFillIcon from "@/assets/icons/HomeFillIcon";
import HomeOutlineIcon from "@/assets/icons/HomeOutlineIcon";
import ListFillIcon from "@/assets/icons/ListFillIcon";
import ListOutlineIcon from "@/assets/icons/ListOutlineIcon";
import MessageFillIcon from "@/assets/icons/MessageFillIcon";
import MessageOutlineeIcon from "@/assets/icons/MessageOutlineIcon";
import NotificationFillIcon from "@/assets/icons/NotificationFillIcon";
import NotificationOutlineIcon from "@/assets/icons/NotificationOutlineIcon";
import ProfileFillIcon from "@/assets/icons/ProfileFillIcon";
import ProfileOutlineIcon from "@/assets/icons/ProfileOutlineIcon";
import SetingFillIcon from "@/assets/icons/SetingFillIcon";
import SetingIcon from "@/assets/icons/SetingOutlineIcon";

export const ThemeMainList = [
   {
      id: 1,
      type: "theme-light",
      color: "rgb(255, 255, 255)",
      colorIcon: "rgb(185, 202, 211)",
      colorText: "rgb(15, 20, 25)",
      title: "titleLight",
   },
   {
      id: 2,
      type: "theme-dim",
      color: "rgb(21, 32, 43)",
      colorIcon: "rgb(92, 110, 126)",
      colorText: "rgb(247, 249, 249)",
      title: "titleDim",
   },
   {
      id: 2,
      type: "theme-dark",
      color: "rgb(0, 0, 0)",
      colorIcon: "rgb(62, 65, 68)",
      colorText: "rgb(231, 233, 234)",
      title: "titleDark",
   },
];
export const ThemeColorList = [
   {
      id: 1,
      type: "theme-blue",
      color: "rgb(29, 155, 240)",
   },
   {
      id: 2,
      type: "theme-yellow",
      color: "rgb(255, 212, 0)",
   },
   {
      id: 3,
      type: "theme-pink",
      color: "rgb(249, 24, 128)",
   },
   {
      id: 4,
      type: "theme-violet",
      color: "rgb(120, 86, 255)",
   },
   {
      id: 5,
      type: "theme-orange",
      color: "rgb(255, 122, 0)",
   },
   {
      id: 6,
      type: "theme-green",
      color: "rgb(0, 186, 124)",
   },
];
export const ThemeFrontSize = [
   {
      id: 1,
      type: "theme-size-14",
      style: "calc(0% - 0px)",
      active: "0",
   },
   {
      id: 2,
      type: "theme-size-15",
      style: "calc(25% - 4px)",
      active: "0.25",
   },
   {
      id: 3,
      type: "theme-size-16",
      style: "calc(50% - 8px)",
      active: "0.5",
   },
   {
      id: 4,
      type: "theme-size-17",
      style: "calc(75% - 12px)",
      active: "0.75",
   },
   {
      id: 5,
      type: "theme-size-18",
      style: "calc(100% - 16px)",
      active: "1",
   },
];

export const MENU_HEADER_LISTS = [
   {
      page: "Home",
      path: "/home",
      icon: HomeOutlineIcon,
      activeIcon: HomeFillIcon,
   },
   {
      page: "Explore",
      path: "/explore",
      icon: ExploreOutlineIcon,
      activeIcon: ExploreFillIcon,
   },
   {
      page: "Notifications",
      path: "/notifications",
      icon: NotificationOutlineIcon,
      activeIcon: NotificationFillIcon,
   },
   {
      page: "Messages",
      path: "/messages",
      icon: MessageOutlineeIcon,
      activeIcon: MessageFillIcon,
   },
   {
      page: "Bookmarks",
      path: "/i/bookmarks",
      icon: BookmarkOutlineIcon,
      activeIcon: BookmarkFillIcon,
   },
   {
      page: "Lists",
      path: "/[username]/lists",
      icon: ListOutlineIcon,
      activeIcon: ListFillIcon,
   },
   {
      page: "Profile",
      path: "/[username]",
      icon: ProfileOutlineIcon,
      activeIcon: ProfileFillIcon,
   },
];

export const MENU_HEADER_LISTS_AUTH = [
   {
      page: "Explore",
      path: "/explore",
      icon: ExploreOutlineIcon,
      activeIcon: ExploreFillIcon,
   },
   {
      page: "Settings",
      path: "/settings/account/personalization",
      icon: SetingIcon,
      activeIcon: SetingFillIcon,
   },
];
