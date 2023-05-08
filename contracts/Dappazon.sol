// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Dappazon {
    // State vars
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

    // Mapping of the Items
    mapping(uint256 => Item) public items;

    constructor() {
        name = "Dappazon";
        owner = msg.sender;
    }

    // List products
    function listItem(
        string memory _name, // name of item
        string memory _image, // item image
        string memory _category, // type of item
        uint256 _id, // ID of the item
        uint256 _cost, // price of item
        uint256 _stock, // how many units of item available
        uint256 _rating // rating of item
    ) public {
        // Create Item struct in memory
        Item memory item = Item(
            _name,
            _image,
            _category,
            _id,
            _cost,
            _stock,
            _rating
        );

        // Save Item struct to the blockchain
        items[_id] = item;
    }

    // Purchase products
    // Withdraw funds (owner of markeplace)
}
