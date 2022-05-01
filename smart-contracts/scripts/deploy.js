const hre = require('hardhat');

async function main() {
  const factory = await hre.ethers.getContractFactory('ProjectFactory');
  const contract = await factory.deploy();

  await contract.deployed();

  console.log('Factory contract deployed at:', contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
