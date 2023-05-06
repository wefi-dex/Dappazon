const { expect } = require("chai");

describe("Dappazon", function () {
  let Dappazon;

  beforeEach(async () => {
    // Deploy the smart contract
    const DappazonContract = await ethers.getContractFactory("Dappazon");
    Dappazon = await DappazonContract.deploy();
    await Dappazon.deployed();
  });

  // Returns the name of the dapp
  it("Should have the correct name", async function () {
    expect(await Dappazon.name()).to.equal("Dappazon");
  });
});
