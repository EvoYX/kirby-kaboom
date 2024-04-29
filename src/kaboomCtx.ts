//initalise the kaboom library and export its context
import kaboom from "kaboom";
import { scale } from "./constants";

export const k = kaboom({
  width: 256 * scale,
  height: 144 * scale,
  scale,
  letterbox: true,
  global: false, // we set it to false cos we want to only be able to use kaboom related functions from this constant
});
