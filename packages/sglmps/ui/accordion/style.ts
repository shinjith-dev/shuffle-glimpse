import styled from "styled-components/native";
import { YStack } from "../Layout";
import { THEME } from "../../lib/config";

export const AccordionContainer = styled(YStack)`
  border-radius: 20px;
  background-color: ${THEME.COLOR_PRIMARY_LIGHTEST};
  border-width: 1px;
  border-color: ${THEME.COLOR_PRIMARY_LIGHTER};
  width: 100%;
`;

export const AccordionHeader = styled.Pressable`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  padding-horizontal: 20px;
  padding-vertical: 12px;
`;

export const AccordionBody = styled(YStack)`
  padding: 20px;
  padding-top: 0;
  width: 100%;
`;
