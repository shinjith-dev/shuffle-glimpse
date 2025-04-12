"use client";
import React, { Fragment, ReactNode, useState } from "react";
import { Heading } from "../Text";
import { AccordionBody, AccordionContainer, AccordionHeader } from "./style";
import Icon from "../Icon";
import { THEME } from "../../lib/config";

type Props = {
  header: ReactNode | string;
  children?: ReactNode;
};

const Accordion = ({ header, children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AccordionContainer>
      <AccordionHeader onPress={() => setExpanded((prev) => !prev)}>
        {typeof header === "string" ? (
          <Fragment>
            <Heading>{header}</Heading>
            <Icon
              name={expanded ? "tabler:chevron-up" : "tabler:chevron-down"}
              color={THEME.COLOR_PRIMARY_LIGHT}
              size="2xl"
            />
          </Fragment>
        ) : (
          header
        )}
      </AccordionHeader>
      {expanded && <AccordionBody>{children}</AccordionBody>}
    </AccordionContainer>
  );
};

export default Accordion;
