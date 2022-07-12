// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "./HelloWorld.sol";

contract HelloWorldV2 is HelloWorld {
    
    // added _name param to greet function
    function greet(string memory _name) public view returns (string memory) {

        // It would simply concat our greeting word with name that pass by caller
        return string(abi.encodePacked(message, " ", _name));
    }

    ///@dev returns the contract version
    function helloWorldVersion() external pure returns (uint256) {
        return 2;
    }
}
