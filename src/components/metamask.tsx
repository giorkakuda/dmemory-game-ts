import React, { useState } from 'react';
import { ethers } from 'ethers';



export default function Metamask() {
  const [walletAddress, setWalletAddress ] = useState('');


  async function requestAccount(): Promise<void> {
    // check if Metamask extension exists
    if (window.ethereum) {
      console.log('Detected');
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress (accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }
    } else {
      alert('Please install Metamask!');
    }
  }
  async function connectWallet() {
    await requestAccount();
     //provider for smart contract interations
    //v5.7.2 and below => new ethers.providers.Web3Provider(window.ethereum)
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    console.log('Account address:', await signer.getAddress());
  
    const balance = await provider.getBalance(await signer.getAddress());
    const balanceInEther = ethers.formatEther(balance);
    console.log("Balance:", balanceInEther);
  }
  
  
  async function claimTokens() {
    await requestAccount();
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
  
    const tokenAddress = '0xeF923F5824396aaae535d310f832Ba247d804cFe';
    const tokenAbi = ["function mintTokens(address account, uint256 amount) public"];
  
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, signer);
  
    let convertToWei = 1000000000; // 1 Ether = 1e18 Wei
    let amountToClaim = (window as any).totalMatches * convertToWei;
  
    if (isNaN(amountToClaim / convertToWei)) {
      alert("Nice try!");
      return;
    }
    console.log("Tokens amount: " + (amountToClaim / convertToWei).toFixed(0));
  
    await tokenContract.mintTokens(await signer.getAddress(), amountToClaim.toString());
  }
  
  return (
    <>
      <div>
        <button className="claimTokens" onClick={claimTokens}>
          Claim Tokens
        </button>
      </div>
    
    </>
  );
}
