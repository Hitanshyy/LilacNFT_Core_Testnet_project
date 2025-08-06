// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract LilacNFT is ERC721URIStorage {
    uint public tokenCount;

    constructor() ERC721("Lilac", "LILAC") {}

    function mintNFT(string memory _tokenURI) public {
        tokenCount++;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
    }
}
