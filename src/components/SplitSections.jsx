import React from "react";

export default function SplitSections({ children }) {
  return (
    <section className="flex flex-col md:w-[90%] md:mx-auto gap-8 md:flex-row justify-between items-center gap-8 my-12">
      {children}
    </section>
  );
}
