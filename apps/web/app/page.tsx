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
          <Button>Brand Button</Button>
          <OutlinedButton>Outlined Button</OutlinedButton>
          <IconButton variant="solid" />
          <IconButton variant="ghost" />
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Button color="primary">Primary Button</Button>
          <Button color="secondary">Secondary Button</Button>
          <Button color="tertiary">Tertiary Button</Button>
          <TextButton>Text Button</TextButton>
          <TextButton color="secondary">Text Button</TextButton>
        </div>
      </div>
    </div>
  );
}
