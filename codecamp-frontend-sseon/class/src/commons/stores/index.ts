import { atom } from "recoil";

export const isEditStates = atom({
  key: "isEditState",
  default: true,
});

export const accessTokenStates = atom({
  key: "accessTokenState",
  default: "",
});
