import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "rgb(214, 219, 220)",
  "--my-black": "#1a1a1a",
  "--my-gray": "#666",
  "--brand-color": "rgb(138,95,209)",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": props["--my-gray"],
  "--gray-base": props["--my-gray"],

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  "--brand-primary": props["--brand-color"],

  "--default-button-color": props["--my-gray"],
  "--default-button-primary-color": props["--brand-color"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  "--state-info-color": props["--brand-color"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--brand-color"],
});
