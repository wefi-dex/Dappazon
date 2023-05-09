// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Dappazon {
    // State vars
    string public name;
    address public owner;

    struct Item {
        string name; // item name
        string image; // item image
        string category; // item type
        uint256 id; // item ID
        uint256 cost; // item cost
        uint256 stock; // item stock
        uint256 rating; // item rating
    }

    // Items mapping
    mapping(uint256 => Item) public items;

    event List(string name, uint256 cost, uint256 quantity);

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        name = "Dappazon";
        owner = msg.sender;
    }

    // List items
    function listItem(
        string memory _name,
        string memory _image,
        string memory _category,
        uint256 _id,
        uint256 _cost,
        uint256 _rating,
        uint256 _stock
    ) public onlyOwner {
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

        // Emit an event (allows the user to subscribe with push notifications)
        emit List(_name, _cost, _stock);
    }
    // Purchase products
    function purchaseItem(uint256 _id) public payable {
        // revieve the funds


        // create an order

        // subtract from the stock

        // emit event
    }
    // Withdraw funds (owner of markeplace)
}
