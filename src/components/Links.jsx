import React, { Component } from "react";

  const Links = ({ href, children, external }) =>{
    return  (
      <a
        className="text-charcoal hover:text-olive active:text-linkactive visited:text-linkvisited underline"
        href="{href}"
        target="{external ? '_blank' : '_self' : undefined}"
        rel="{external ? 'noopener noreferrer' : undefined}"
      >
        {children}
      </a>
    );
  }
export default Links;
