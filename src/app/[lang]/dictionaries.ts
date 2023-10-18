import "server-only";

import { ValidLocales } from "./langTypes";

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  np: () =>
    import("../../dictionaries/np.json").then((module) => module.default),
};

export const getDictionary = async (locale: ValidLocales) =>
  dictionaries[locale]();
