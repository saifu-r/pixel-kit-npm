import { communication } from "./communication";
import { navigation } from "./navigation";
import { ui } from "./ui";

// flat map — all icons in one object
export const icons = {
  ...navigation,
  ...ui,
  ...communication,
};

// category map — for the website browser
export const categories = {
  Navigation: navigation,
  UI: ui,
  Communication: communication,
  // ...
};