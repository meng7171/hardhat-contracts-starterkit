
const { expect } = require("chai");
const hre = require("hardhat");


describe("HelloWorld", function () {
  it("Should return the new hello-world message once it's changed", async function () {

    // CASE-1 : deploy as original message 

    const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
    const greeting = await HelloWorld.deploy("Hello world, 123!");
    await greeting.deployed();

    await greeting.message().then(response => {
      console.log("The ORIGINAL message is: " + response)
    });;

    expect(await greeting.message()).to.equal("Hello world, 123!");


    // CASE-2 : start update message 

    // set new message
    const setNewGreetingTx = await greeting.update("Hello world, xyz!");
    await setNewGreetingTx.wait();

    await greeting.message().then(response => {
      console.log("The UPDATED message is: " + response)
    });
    
    expect(await greeting.message()).to.equal("Hello world, xyz!");
  });
});
