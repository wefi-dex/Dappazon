const hre = require("hardhat");
const { items } = require("../src/items.json");

// WEI => ETH tokens helper converter
const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

async function main() {
  // Setup accounts
  const [deployer] = await ethers.getSigners();

  // Deploy Dappazon
  const Dappazon = await hre.ethers.getContractFactory("Dappazon");
  const dappazon = await Dappazon.deploy();
  await dappazon.deployed();
  console.log(`Deployed Dappazon to: ${dappazon.address}\n`);

  // List Items...
  for (let i = 0; i < items.length; i++) {
    const transaction = await dappazon
      .connect(deployer)
      .list(
        items[i].id,
        items[i].name,
        items[i].category,
        items[i].image,
        tokens(items[i].price),
        items[i].rating,
        items[i].stock
      );
    await transaction.wait();
    console.log(`Listed item ${items[i].id}: ${items[i].name}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
