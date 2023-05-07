// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Dappazon {
    string public name;
    address public owner;

    struct Item {
        string name;
        string image;
        string category;
        uint256 id;
        uint256 cost;
        uint256 stock;
        uint256 rating;
    }

    constructor() {
        name = "Dappazon";
        owner = msg.sender;
    }

    // List products
    function listItem(
        uint256,
        string memory _name, // name of item
        string memory _category, // type of item
        string memory _image, // item image
        uint256 _cost, // price of item
        uint256 _rating, // rating of item
        uint256 _stock // how many units of item available
    ) public {}

    // Purchase products
    // Withdraw funds (owner of markeplace)
}
