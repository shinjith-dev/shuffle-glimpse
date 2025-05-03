import { useWidth } from "@/hooks";
import usePathname from "@/hooks/usePathname";
import useRouter from "@/hooks/useRouter";
import { THEME } from "@/lib";
import { Icon } from "@/ui/icon";
import React, { memo } from "react";

interface IMenuProps {
  label: string;
  path: string;
  icon: string;
}

const MenuItem: React.FC<IMenuProps> = memo(({ label, icon, path }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { isTab, isMobile } = useWidth();
  const collapsed = isMobile || isTab;

  return (
    <button
      title={label}
      onClick={() => router.push(path)}
      className={`hover:text-fg flex cursor-pointer items-center rounded-md font-medium transition-all ${pathname === path ? (collapsed ? "text-fg" : "text-fg bg-fg/10") : "text-fg/70 bg-transparent"} ${!collapsed && "w-full px-3"} ${isMobile ? "group flex-col" : "hover:bg-fg/15 flex-row gap-2"}`}
      style={{
        fontSize: isMobile ? THEME.fontSize.xs : THEME.fontSize.md,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full p-1 transition-all ${pathname === path ? (collapsed ? "bg-fg/10" : "") : ""} ${isMobile ? "group-hover:bg-fg/15 h-9 w-9" : "h-10 w-10"}`}
      >
        <Icon name={icon} size={20} />
      </div>
      {(!collapsed || isMobile) && label}
    </button>
  );
});

export default MenuItem;
