import { ReactNode } from "react";

export enum DEVICE_TYPE {
    DESKTOP = "DESKTOP",
    MOBILE = "MOBILE",
    TABLET = "TABLET",
  }


export interface OptionType {
  value: string;
  label: string;

}
