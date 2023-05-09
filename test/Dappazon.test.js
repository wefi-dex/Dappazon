const { expect } = require("chai");
const { ethers } = require("hardhat");

// WEI converter (WEI => ETH) helper
const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

// Global constants for listing an item
const NAME = "Shoes";
const IMAGE =
  "https://ipfs.io/ipfs/QmTYEboq8raiBs7GTUg2yLXB3PMz6HuBNgNfSZBx5Msztg/shoes.jpg";
const CATEGORY = "Clothing";
const ID = 1;
const COST = tokens(1);
const RATING = 4;
const STOCK = 5;

describe("Dappazon", () => {
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
      transaction = await dappazon
        .connect(deployer)
        .listItem(NAME, IMAGE, CATEGORY, ID, COST, RATING, STOCK); // Must be in the same order as the 'listItem' function

      await transaction.wait();
    });

    it("Should return the item attributes", async () => {
      const item = await dappazon.items(ID);
      expect(item.id).to.equal(ID);
    });
  });
});
