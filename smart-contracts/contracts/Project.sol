// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
 
contract ProjectFactory {
    address[] public deployedProjects;
    
    function createProject(string memory _name, string memory _description, uint _target) public {
        address project = address(new Project(_name, _description, _target));
        deployedProjects.push(project);
    }
 
    function getDeployedProjects() public view returns (address[] memory) {
        return deployedProjects;
    }
}

contract Project {
    address public owner;
    string public name;
    string public description;
    uint public target;
    uint public raised;
    bool public isCompleted;
    mapping(address => uint) mapDonorDonation;
    uint public donationsCount;
    
    constructor(string memory _name, string memory _description, uint _target) {
        owner = msg.sender;
        name = _name;
        description = _description;
        target = _target;
    }
    
    // ----- modifiers ----- //
    modifier isOwner() {
        require(msg.sender == owner);
        _;
    }
    
    // ----- actions ----- //
    function donate() external payable {
        mapDonorDonation[msg.sender] += msg.value;
        raised += msg.value;
        donationsCount++;
        if (raised >= target) {
            isCompleted = true;
        }
    }
    
    function getSummary() external view returns(address, string memory, string memory, uint, uint, bool, uint) {
        return (owner,
            name,
            description,
            target,
            raised,
            isCompleted,
            donationsCount
        );
    }
    
    function getContractBalance() external view returns(uint) {
        return address(this).balance;
    }
}


