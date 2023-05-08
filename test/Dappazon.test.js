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
  });

  describe("Listing", () => {
    let transaction;

    beforeEach(async () => {
      transaction = await dappazon.connect(deployer).listItem(
        "Shoes",
        "Image",
        "Clothing",
        1, // ID
        2, // cost
        3, // rating
        4 // stock
      );

      await transaction.wait();
    });

    it("Should return the item attributes", async () => {
      const item = await dappazon.items(1);
      expect(item.id).to.equal(1);
    });
  });
});
