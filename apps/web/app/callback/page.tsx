"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { useAuth } from "sglmps/hooks";

function CallBackHandler() {
  const searchParams = useSearchParams();
  const { callback } = useAuth();

  useEffect(() => {
    if (searchParams.has("error") || !searchParams.get("code"))
      console.log("Error authenticating user");
    else
      callback(searchParams.get("code") || "", searchParams.get("state") || "");
  }, [searchParams, callback]);

  return null;
}

export default function CallBackHandlerWrapped() {
  return (
    <Suspense>
      <CallBackHandler />
    </Suspense>
  );
}
