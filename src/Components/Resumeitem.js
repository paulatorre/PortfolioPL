import React from "react";

const ResumenItem = ({ title, subtitle, children }) => {
  return (
    <section className="resumeItem">
      <h2 className="resumeItem_title">{title}</h2>
      <h3 className="resumeItem_subtitle">{subtitle}</h3>
      <div>{children}</div>
    </section>
  );
};

export default ResumenItem;
