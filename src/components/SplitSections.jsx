import React from "react";

export default function SplitSections({ children }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:w-[90%] md:mx-auto gap-8 items-center my-12">
      {children}
    </section>
  );
}
