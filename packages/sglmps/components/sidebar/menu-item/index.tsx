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

  return (
    <button
      onClick={() => router.push(path)}
      className={`hover:bg-fg/15 hover:text-fg flex w-full cursor-pointer flex-row items-center gap-2 rounded-md px-3 py-2.5 font-medium transition-all ${pathname === path ? "text-fg bg-fg/10" : "text-fg/70 bg-transparent"}`}
      style={{
        fontSize: THEME.fontSize.md,
      }}
    >
      <Icon name={icon} size={20} />
      {label}
    </button>
  );
});

export default MenuItem;
