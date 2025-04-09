"use client";

import { THEME } from "sglmps/lib";
import { Button, IconButton, TextButton } from "sglmps/ui";
import { useTheme } from "sglmps/hooks";

export default function Web() {
  const { theme } = useTheme();
  return (
    <div style={{ padding: 16, backgroundColor: THEME.color["bg-10"] }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          padding: 16,
          borderRadius: 16,
          marginBottom: 16,
        }}
      >
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Button>Solid Button</Button>
          <Button variant="outlined">Outlined Button</Button>
          <TextButton>Text Button</TextButton>
          <IconButton variant="solid" />
          <IconButton variant="ghost" />
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Button rounded color="secondary">
            Rounded Button
          </Button>
          <Button rounded variant="outlined" color="secondary">
            Rounded Outlined Button
          </Button>
          <TextButton underline color="secondary">
            Text Underlined
          </TextButton>
          <IconButton variant="outlined" color="secondary" />
          <IconButton variant="ghost" color="secondary" />
        </div>
      </div>
    </div>
  );
}
