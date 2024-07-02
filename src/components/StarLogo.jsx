import React from "react";

function Star(){
    return (
        <picture>
        <source
          srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ab/512.webp"
          type="image/webp"
        />
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4ab/512.gif"
          alt="💫"
          width="40"
          height="40"
        />
      </picture>
    )
}

export default Star