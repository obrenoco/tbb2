import React, { HTMLAttributes } from "react";
export const Container = ({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={`absolute top-0 bottom-0 left-0 right-0 flex flex-col ${className}`}
    {...props}
  >
    {children}
  </div>
);
