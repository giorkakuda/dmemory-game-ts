import React, { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import  Sidebar  from './sidebar';

export default function Footer(): JSX.Element {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = (): void => {
    setSidebar(!sidebar);
  };

  return (
    <footer className='icon'>
      <InfoIcon onClick={showSidebar}/>
      {sidebar && <Sidebar active={setSidebar} />}

      <a href="https://giorkakuda.github.io/portfolio/#" target="_blank">
        <strong>Game Implemented on Web3 by Giordanni</strong>
      </a>
    </footer>
    
  );
}
