async function main() {
  const contractAddress = "0xb3286dD0Ed6a10D429fb11484Fe6f24a4B995c0d"; 
  const LilacNFT = await ethers.getContractFactory("LilacNFT");
  const lilacNFT = await LilacNFT.attach(contractAddress);

  const tx = await lilacNFT.mintNFT("ipfs://QmYourMetadataHash");
  await tx.wait();

  console.log("NFT Minted!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
