// onCopy: Triggered when content is copied.
// onCut: Triggered when content is cut.
// onPaste: Triggered when content is pasted.

import React from "react";

const ClipboardEvents = () => {

    const copyHandler = () => {
        console.log("Copy Initiated")
    }

    const cutHandler = () => {
        console.log("text cut");
    }

    const pasteHandler = () => {
        console.log("text Pasted")
    }

  return (
    <div>
      <h5 onCopy={copyHandler} onCut={cutHandler} onPaste={pasteHandler}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        consectetur id sit autem perferendis at quibusdam et, fugit sequi libero
        hic officia eaque ullam similique iste non nobis rem unde commodi harum
        deserunt debitis in! Facilis est saepe assumenda accusantium nobis
        tenetur, similique earum ipsa libero veniam, enim possimus
        exercitationem optio facere temporibus ab labore officiis nulla quasi
        corrupti molestiae non nisi. Consectetur, enim officia itaque quae earum
        consequuntur. Animi, nulla placeat. Unde ab delectus explicabo, veniam
        atque repellat facere nemo provident magnam iste ea, ipsam itaque
        molestias porro incidunt. 
      </h5>
    </div>
  );
};

export default ClipboardEvents;
