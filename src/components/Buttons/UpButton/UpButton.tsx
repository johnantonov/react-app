import { FunctionComponent } from "react";

interface Props {
  sectionID: string;
  color?: string;
  className?: string;
};


export const UpButton: FunctionComponent<Props> = (
  { sectionID, color = '#AF9678', className }
) => {
  return (
    <a href={'#' + sectionID} className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
        <rect x="1" y="1" width="74" height="74" stroke={color} strokeWidth="2"/>
        <path d="M56 45.1414L38 28L20 45.1414L22.9996 48L38 33.7131L53.0004 48L56 45.1414Z" fill={color}/>
      </svg>
    </a>
  )
};