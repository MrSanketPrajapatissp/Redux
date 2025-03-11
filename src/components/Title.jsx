import React from "react";

function Title({ name }) {
  return (
    <>
      <div
        style={{
          fontFamily: "Sans-serif",
          fontSize: 50,
        }}
      >
        {name}
      </div>
      
    </>
  );
}

export default Title;
