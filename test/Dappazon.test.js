const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dappazon", function () {
  let dappazon;
  let deployer, buyer;

  beforeEach(async () => {
    // Setup accounts
    [deployer, buyer] = await ethers.getSigners();

    // Deploy the smart contract before each test
    const Dappazon = await ethers.getContractFactory("Dappazon");
    dappazon = await Dappazon.deploy();
  });

  // Returns the name of the dapp
  describe("Deployment", () => {
    it("Should set the owner of Dappazon", async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    });

    it("Should have the correct name", async () => {
      const name = await dappazon.name();
    });
  });
});
