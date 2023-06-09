import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import getEth from '../../images/getEth.png'; 
import import1 from '../../images/import.png'; 
import metamask1 from '../../images/metamask1.png'; 
import claim from '../../images/claim.png'; 
import transfer from '../../images/transfer.png';

type SidebarProps = {
  active: (value: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ active }) => {
  const [displayedImage, setDisplayedImage] = useState<string | null>(null); // State for currently displayed image

  const closeSidebar = () => {
    active(false); // Function to close the sidebar
  };

  const handleItemClick = (image: string) => {
    setDisplayedImage(image); // Function to handle click on list items and update displayed image
  };

  const handleCloseImage = () => {
    setDisplayedImage(null); // Function to close the displayed image
  };

  return (
    <div className="sidebar">
      <CloseIcon onClick={closeSidebar} />

      <ul className="list">
        <li onClick={() => handleItemClick(metamask1)}>METAMASK</li>
        <li onClick={() => handleItemClick(getEth)}>FAUCET</li> 
        <li onClick={() => handleItemClick(import1)}>IMPORT</li> 
        <li onClick={() => handleItemClick(claim)}>CLAIM TOKENS</li>
        <li onClick={() => handleItemClick(transfer)}>TRANSFER</li> 
        <hr />
        Links:
        <li><a href='https://metamask.io/download/' target='_blank' rel='noopener noreferrer'>metamask.io</a></li> 
        <li><a href='https://sepoliafaucet.com/' target='_blank' rel='noopener noreferrer'>sepoliafaucet</a></li>
        <li><a href='https://sepolia.etherscan.io/address/0xeF923F5824396aaae535d310f832Ba247d804cFe' target='_blank' rel='noopener noreferrer'>GiortokenZ</a></li> 
      </ul>

      {displayedImage && ( // Conditional rendering of the image container if there is a displayed image
        <div className="image-container">
          <div className="close-button" onClick={handleCloseImage}>
            <CloseIcon />
          </div>
          <div className="image-wrapper">
            <img src={displayedImage} alt="Image" className="image" /> 
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
