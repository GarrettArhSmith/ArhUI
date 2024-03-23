import React from "react";

import "./Tabs.css";

export interface TabsProps {
  tabTitles: string[];
}

export function Tabs ({
  tabTitles,
  children,
}: React.PropsWithChildren<TabsProps>) {
    return (
      <div>
        {tabTitles.map((title) => (
          <button key={title}>{title}</button>
        ))}
        {children}
      </div>
    );
}