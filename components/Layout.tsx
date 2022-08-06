import React from "react";

const Layout: React.FC<{ title?: string }> = ({ children }) => {
  return (
    <div>
      Layout
      <br />
      {children}
    </div>
  );
};

export default Layout;
