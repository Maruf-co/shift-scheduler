import React from 'react';

const NPM: React.FC<{ 
    color?: string; 
    width?: string; 
    height?: string 
}> = ({ color = '#000', width = '80px', height = '80px' }) => {
  return (
    <svg
      fill={color}
      viewBox="0 0 512 512"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#fff"
      width={width}
      height={height}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <rect x="227.6" y="213.1" width="28.4" height="57.1"></rect>
        <path d="M0,156V327.4H142.2V356H256V327.4H512V156ZM142.2,298.9H113.8V213.2H85.3v85.7H28.4V184.6H142.2Zm142.2,0H227.5v28.6H170.6V184.6H284.4Zm199.2,0H455.2V213.2H426.8v85.7H398.4V213.2H370v85.7H313.1V184.6H483.8V298.9Z"></path>
      </g>
    </svg>
  );
};

export default NPM;
