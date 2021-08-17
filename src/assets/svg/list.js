import * as React from "react";

export const SvgListComponent = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60.123 60.123"
      height="24px"
      width="24px"
      {...props}
    >
      <path
        fill="#afafaf"
        d="M57.124 51.893H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6zM57.124 33.062H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6zM57.124 14.231H16.92a3 3 0 110-6h40.203a3 3 0 01.001 6z"
      />
      <circle fill="#afafaf" cx={4.029} cy={11.463} r={4.029} />
      <circle fill="#afafaf" cx={4.029} cy={30.062} r={4.029} />
      <circle fill="#afafaf" cx={4.029} cy={48.661} r={4.029} />
    </svg>
  );
};
