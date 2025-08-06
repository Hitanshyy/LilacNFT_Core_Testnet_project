async function main() {
  const LilacNFT = await ethers.getContractFactory("LilacNFT");
  const lilacNFT = await LilacNFT.deploy();
  await lilacNFT.deployed();
  console.log("LilacNFT deployed to:", lilacNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

