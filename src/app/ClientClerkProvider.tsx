"use client";

import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

export const CustomClerkProvider = ({
  children,
  ...props
}: React.PropsWithChildren<ClerkProviderProps>) => {
  return <ClerkProvider {...props}>{children}</ClerkProvider>;
};

export default CustomClerkProvider;
