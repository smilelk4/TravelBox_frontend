import React from 'react';

export const DarkAddIcon = ({ type='' }) => {
  return ( 
    <div className={`add-icon ${type}`}>
      <svg width="28" height="28" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="127" cy="127" r="119.5" stroke="#616161" stroke-width="16"/>
      <line x1="126.5" y1="218" x2="126.5" y2="36" stroke="#616161" stroke-width="16"/>
      <line x1="36" y1="129.5" x2="218" y2="129.5" stroke="#616161" stroke-width="16"/>
      </svg>
    </div>
   );
}
 
export const LightAddIcon = ({ type='' }) => {
  return ( 
    <div className={`add-icon ${type}`}>
    <svg width="63.5" height="63.5" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="127" cy="127" r="119.5" stroke="#F7F9F7" stroke-width="16"/>
    <line x1="126.5" y1="218" x2="126.5" y2="36" stroke="#F7F9F7" stroke-width="16"/>
    <line x1="36" y1="129.5" x2="218" y2="129.5" stroke="#F7F9F7" stroke-width="16"/>
    </svg>
    </div>
   );
}
 
