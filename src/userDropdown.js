// import React, {useState} from "react";

// const userDropdown = (label, defaultstate, options) => {
//     const [state, setstate] = useState(defaultstate);
//     const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
//     const Dropdown = () => {
//         <label htmlFor={id}>
//             {label}
//             <select id={id} value={state} onChange = {e => setstate(e.target.value)} onBlur= {e => setstate(e.target.value)} disabled={options.length === 0}>
//             <option>All</option>
//              {options.map(item => {
//                  <option key={item} value={item}>{item}</option>
//              })}
//             </select>

//         </label>

//     };
//     return [state, Dropdown, setstate];
// };

// export default userDropdown;
import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(e) => updateState(e.target.value)}
        onBlur={(e) => updateState(e.target.value)}
        disabled={!options.length}
      >
        <option />
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
