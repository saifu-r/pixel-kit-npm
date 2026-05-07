import { communication } from "./communication";
import { navigation } from "./navigation";
import { ui } from "./ui";
import { action } from "./action";
import { alertStatus } from "./alert-status";
import { arrow } from "./arrow";
import { commerce } from "./commerce";
import { filesFolder } from "./files-folder";
import { media } from "./media";
import { misc } from "./misc";
import { natureWeather } from "./nature-weather";
import { security } from "./security";
import { settingTool } from "./setting-tool";
import { travelTransport } from "./travel-transport";
import { userSocial } from "./user-social";

// flat map — all icons in one object
export const icons = {
  ...arrow,
  ...navigation,
  ...ui,
  ...communication,
  ...action,
  ...alertStatus,
  ...commerce,
  ...filesFolder,
  ...media,
  ...misc,
  ...natureWeather,
  ...security,
  ...settingTool,
  ...travelTransport,
  ...userSocial,
};

// category map — for the website browser
export const categories = {
  Arrows: arrow,
  Navigation: navigation,
  'UI Controls': ui,
  Communication: communication,
  Actions: action,
  'Alerts & Status': alertStatus,
  Commerce: commerce,
  'Files & Folders': filesFolder,
  Media: media,
  Misc: misc,
  'Nature & Weather': natureWeather,
  Security: security,
  'Settings & Tools': settingTool,
  'Travel & Transport': travelTransport,
  'User & Social': userSocial,
};


// next update icons
// Finance & Banking — every SaaS needs
// Text & Typography — every editor needs
// Development & Code — your users = devs
// Calendar & Time — gap in current list
// Health & Medical — massive market