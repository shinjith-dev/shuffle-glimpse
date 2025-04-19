import usePathname from "@/hooks/usePathname";
import { THEME } from "@/lib";
import { Icon } from "@/ui/icon";
import React from "react";

interface IMenuProps {
  label: string;
  path: string;
  icon: string;
}

const MenuItem: React.FC<IMenuProps> = ({ label, icon, path }) => {
  const pathname = usePathname();

  return (
    <button
      className="hover:bg-bg-20 hover:text-fg flex w-full cursor-pointer flex-row items-center gap-2 rounded-md px-3 py-2.5 font-medium transition-all"
      style={{
        color: pathname === path ? THEME.color.fg : THEME.color["bg-80"],
        fontSize: THEME.fontSize.md,
      }}
    >
      <Icon name={icon} size={20} />
      {label}
    </button>
  );
};

export default MenuItem;
