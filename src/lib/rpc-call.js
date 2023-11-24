// const getClient = async () => {
//   const INFURA_RPC_URL = process.env.REACT_APP_INFURA_RPC_URL;
//   const web3 = new Web3(INFURA_RPC_URL);
//   return web3;
// };

// 1. GetCurrentBlockNumber
export const getCurrentBlockNumber = async (provider) => {
  const blockNumber = await provider.eth.getBlockNumber();
  return String(blockNumber);
};

// 2. GetBlockData
export const getBlockData = async (provider, blockNumber) => {
  const block = await provider.eth.getBlock(blockNumber);

  // const length = block.transactions.length;
  // const transactions = [];
  // for (let i = 0; i < length; i++) {
  //   const transaction = await provider.eth.getTransactionFromBlock(blockNumber, i);
  //   transactions.push(transaction);
  // }

  // const jsonString = JSON.stringify(block.response, (key, value) =>
  //   typeof value === "bigint" ? value.toString() : value
  // );

  return block;
};

// 3. GetTransactionReceipt
export const getTransactionReceipt = async (provider, transactionHash) => {
  const receipt = await provider.eth.getTransactionReceipt(transactionHash);
  console.log(receipt);
  const result = parseBigint(receipt);
  return result;
};

const parseBigint = (data) =>
  JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
