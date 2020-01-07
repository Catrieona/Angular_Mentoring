import { Config } from "../../core/models/consfig";

export interface configState {
    config: Config[];
}

export const initialConfigState: configState = {
  config: null
}