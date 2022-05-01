const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('ProjectFactory', () => {
  it('Should have an empty array of deployed projects', async () => {
    const factory = await ethers.getContractFactory('ProjectFactory');
    const contract = await factory.deploy();

    await contract.deployed();

    console.log('Factory contract deployed at:', contract.address);

    expect(await contract.getDeployedProjects()).to.have.lengthOf(0);
  });
});
