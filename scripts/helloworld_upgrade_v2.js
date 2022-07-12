const { ethers, upgrades } = require("hardhat");

//https://www.web3.university/article/upgrading-smart-contracts-with-openzeppelin-upgradable-plugin
const PROXY = "0x1234567";   // contract address after deployed 'HelloWorld.sol'

async function main() {

  const HelloworldV2 = await ethers.getContractFactory('HelloWorldV2');
  console.log("Upgrading HelloworldV2...");

  // Put the same address of Greeter that deploy earlier
  await upgrades.upgradeProxy(PROXY, HelloworldV2);
  console.log("Helloworld upgraded successfully to v2.0......");

}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});