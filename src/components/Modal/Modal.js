import React, { useState } from "react";
import "./Modal.css";

export const Modal = () => {
  const [shoModal, setShowModal] = useState(false);
  const showModalHandler = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <button onClick={showModalHandler}>show modal</button>
      {shoModal && (
        <div className="modal-overlay" onClick={showModalHandler}>
          <div className="modal-msg" onClick={(e) => e.stopPropagation()}>
            {/* e.stopPropagation is needed, else bubble up happens and showModalHandler calls again */}
            <span onClick={showModalHandler}>X</span>
            <div> Are you sure you want to cancel</div>
            <div className="buttons">
              <button>yes</button>
              <button>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
