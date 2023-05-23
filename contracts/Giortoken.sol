// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GiortokenZ is ERC20 {
    constructor() ERC20("GiortokenZ", "GIORZ") {
        _mint(msg.sender, 20 * 10 ** 6);
    }

    function mintTokens(address account, uint256 amount) public {
        _mint(account, amount);
    }
}
//built and deployed using Remix