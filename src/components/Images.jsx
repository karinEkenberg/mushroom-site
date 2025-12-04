import React from "react";

// (Valfritt: om du vill använda PropTypes för extra säkerhet)
// import PropTypes from 'prop-types';

export default function Images({ src, alt }) {
  return (
    <div className="flex justify-center w-full">
      <img className="w-full object-cover" src={src} alt={alt} loading="lazy" />
    </div>
  );
}
