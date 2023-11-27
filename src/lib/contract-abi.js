export const funcTransfer =
  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
export const orderFullfilled =
  "0x9d9af8e38d66c62e2c12f0225249fd9d721c54b83f48d9352c97c6cacdcb6f31";

//opensea
export const funcOpenSea_Fill =
  "0x6869791f0a34781b29882982cc39e882768cf2c96995c2a110c577c53bc932d5";
export const funcOrderFulfilled =
  "0x9d9af8e38d66c62e2c12f0225249fd9d721c54b83f48d9352c97c6cacdcb6f31";

export const abiOrderFulfilled = [
  {
    indexed: false,
    internalType: "bytes32",
    name: "orderHash",
    type: "bytes32",
  },
  { indexed: true, internalType: "address", name: "offerer", type: "address" },
  { indexed: true, internalType: "address", name: "zone", type: "address" },
  {
    indexed: false,
    internalType: "address",
    name: "recipient",
    type: "address",
  },
  {
    components: [
      { internalType: "enum ItemType", name: "itemType", type: "uint8" },
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "identifier", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    indexed: false,
    internalType: "struct SpentItem[]",
    name: "offer",
    type: "tuple[]",
  },
  {
    components: [
      { internalType: "enum ItemType", name: "itemType", type: "uint8" },
      { internalType: "address", name: "token", type: "address" },
      { internalType: "uint256", name: "identifier", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address payable", name: "recipient", type: "address" },
    ],
    indexed: false,
    internalType: "struct ReceivedItem[]",
    name: "consideration",
    type: "tuple[]",
  },
];
