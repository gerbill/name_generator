import React from "react";

function MaleFemale({ isMale, setIsMale }) {
  const handleClick = () => {
    setIsMale(!isMale);
  };

  return (
    <div
      className="btn-group my-3"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        className="btn-check"
        id="male"
        autoComplete="off"
        checked={isMale}
        onChange={handleClick}
      />
      <label className="btn btn-outline-primary px-5" htmlFor="male">
        Male
      </label>

      <input
        type="radio"
        className="btn-check"
        id="female"
        autoComplete="off"
        checked={!isMale}
        onChange={handleClick}
      />
      <label className="btn btn-outline-primary px-5" htmlFor="female">
        Female
      </label>
    </div>
    // <div className="row">
    //   <div className="col-3">
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="radio"
    //         id="male"
    //         checked={isMale}
    //         onChange={handleClick}
    //       />
    //       <label className="form-check-label" htmlFor="male">
    //         Male
    //       </label>
    //     </div>
    //   </div>
    //   <div className="col-3">
    //     <div className="form-check">
    //       <input
    //         className="form-check-input"
    //         type="radio"
    //         id="female"
    //         checked={!isMale}
    //         onChange={handleClick}
    //       />
    //       <label className="form-check-label" htmlFor="female">
    //         Female
    //       </label>
    //     </div>
    //   </div>
    // </div>
  );
}

export default MaleFemale;
