//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.10;

// Open Zeppelin libraries for controlling upgradability and access.
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract HelloWorld is Initializable, UUPSUpgradeable, OwnableUpgradeable {
   
   // uint256 public slices;
   // Declares a state variable `message` of type `string`.
   string public message;

   ///@dev no constructor in upgradable contracts. Instead we have initializers
   function initialize(string memory initMessage) public initializer {

      // Accepts a string argument `initMessage` and sets the value into the contract's `message` storage variable).
      message = initMessage;

      ///@dev as there is no constructor, we need to inititalze the OwnableUpgradeable explicitly
      __Ownable_init();
   }

   ///@dev required by the OZ UUPS module
   function _authorizeUpgrade(address) internal override onlyOwner {}

   //Emitted when update function is called
   event UpdatedMessages(string oldStr, string newStr);

   // A public function that accepts a string argument and updates the `message` storage variable.
   function update(string memory newMessage) public {
      string memory oldMsg = message;
      message = newMessage;
      emit UpdatedMessages(oldMsg, newMessage);
   }

}

