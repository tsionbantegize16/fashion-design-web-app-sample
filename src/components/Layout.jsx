import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="flex h-screen overflow-x-auto snap-x snap-mandatory">
      {React.Children.map(children, (child, index) => (
        <section className="snap-start w-screen h-full flex-shrink-0 overflow-y-auto">
          {child}
        </section>
      ))}
    </main>
  );
};

export default Layout;
