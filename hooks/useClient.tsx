"use client";

import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

export const useClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

export const ClientOnly = ({
  fallback,
  children,
}: PropsWithChildren<{
  fallback?: ReactNode;
}>) => {
  const isClient = useClient();

  if (!isClient) return fallback;

  return children;
};
