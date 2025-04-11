"use client";

import { THEME } from "sglmps/lib";
import { Button, IconButton, OutlinedButton, TextButton } from "sglmps/ui";
import { useTheme } from "sglmps/hooks";

export default function Web() {
  const { theme } = useTheme();
  return (
    <div style={{ padding: 16, backgroundColor: THEME.color["bg-10"] }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          padding: 16,
          borderRadius: 16,
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Button>Button</Button>
          <IconButton variant="solid" />
          <IconButton variant="ghost" />
          <TextButton>Button</TextButton>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Button color="primary">Button</Button>
          <IconButton color="primary" variant="solid" />
          <IconButton color="primary" variant="ghost" />
          <TextButton color="primary">Text Button</TextButton>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Button color="secondary">Button</Button>
          <IconButton color="secondary" variant="solid" />
          <IconButton color="secondary" variant="ghost" />
          <OutlinedButton>Outlined Button</OutlinedButton>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Button color="tertiary">Button</Button>
          <IconButton color="tertiary" variant="solid" />
          <IconButton color="tertiary" variant="ghost" />
        </div>
      </div>
    </div>
  );
}
