import React from "react";
import Monicon, { MoniconProps } from "@monicon/native";
import { THEME } from "../../lib";

export type IconProps = MoniconProps;

export const Icon: React.FC<MoniconProps> = (props) => {
  return <Monicon size={THEME.iconSize.md} {...props} />;
};
