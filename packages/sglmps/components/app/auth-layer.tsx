"use client";
import { useMounted } from "@/hooks/useMounted";
import useRouter from "@/hooks/useRouter";
import { useAuthStore } from "@/store";
import { ReactNode } from "react";
import Loading from "./loading";

const AuthLayer: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isAuthenticated = useAuthStore((state) => !!state.accessToken);
  const mounted = useMounted();
  const router = useRouter();

  if (!mounted) return null;

  if (!isAuthenticated) {
    router.push("/login");
    return <Loading />;
  }

  return children;
};

export default AuthLayer;
