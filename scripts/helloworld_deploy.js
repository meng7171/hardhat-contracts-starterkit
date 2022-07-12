const { ethers, upgrades } = require("hardhat");


async function main() {

  const Helloworld = await ethers.getContractFactory('HelloWorld');
  const hello_world = await upgrades.deployProxy(Helloworld, ['helloworld v1.0 !!!'], { initializer: 'update' });
  console.log("Contract deployed to address:", hello_world.address);

}
 
main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});

