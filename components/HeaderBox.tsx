import React from "react";

const HeaderBox = (props: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {props.title}{" "}
        {props.type === "greeting" && (
          <span className="text-bankGradient">{props.user}</span>
        )}
      </h1>

      <p className="header-box-subtext">{props.subtext}</p>
    </div>
  );
};

export default HeaderBox;
