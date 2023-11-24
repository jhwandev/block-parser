import { useState } from "react";
import * as rpcCall from "../lib/rpc-call";
import Web3 from "web3";

function Test() {
  const [response, setResponse] = useState("hello world.");
  const [responseObject, setResponseObject] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [chainId, setChainId] = useState("1");

  // provider
  const [provider, setProvider] = useState();

  /**
   * params
   */
  const [rpcUrl, setRpcUrl] = useState("");
  const [currentBlockNumber, setCurrentBlockNumber] = useState("");
  const [blockNumber, setBlockNumber] = useState("");
  const [trHash, setTrHash] = useState("");
  const [trReceipt, setTrReceipt] = useState("");

  /**
   * inputdata onchange event
   * set state value
   * @param {*} e
   */
  const handleChange = (e) => {
    switch (e.target.name) {
      case "rpcUrl":
        setRpcUrl(e.target.value);
        break;
      case "trHash":
        setTrHash(e.target.value);
        break;
      case "trReceipt":
        setTrReceipt(e.target.value);
        break;
      case "networkSelect":
        setChainId(e.target.value);
        break;
      case "blockNumber":
        setBlockNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  // ------------------ getBlockData ------------------

  // connect rpc url
  const onClickSetProvider = async () => {
    const web3 = new Web3(rpcUrl);
    if (web3.currentProvider) {
      setResponse(JSON.stringify(web3.eth.currentProvider));
      setProvider(web3);
    } else {
      setResponse("fail connect RPC");
    }
    return web3;
  };

  async function getCurrentBlock() {
    const currentBlockNumber = await rpcCall.getCurrentBlockNumber(provider);
    console.log(currentBlockNumber);
    setCurrentBlockNumber(currentBlockNumber);
  }

  async function getBlockData() {
    const blockData = await rpcCall.getBlockData(provider, blockNumber);
    const transactionsLength = blockData.transactions.length;

    if (transactionsLength) {
      let result = "";
      console.log(blockData.transactions);

      result +=
        "[SUCCESS] Total Transaction Length : " + transactionsLength + "\n";

      for (let i = 0; i < transactionsLength; i++) {
        result += "[" + i + "] " + blockData.transactions[i] + "\n";
      }
      setResponse(result);
    }
  }

  async function getTransactionReceipt() {
    const res = await rpcCall.getTransactionReceipt(provider, trHash);
    console.log(res);
    setResponse(JSON.stringify(res));
  }
  // -----------------------------------
  return (
    <>
      <section className="content">
        <div>
          {/* title */}
          <div
            className="title"
            style={{
              marginTop: "70px",
              marginBottom: "60px",
            }}
          >
            <span>TEST</span>
          </div>
          {/* title end */}
        </div>
        <div className="flexbox">
          {/* flex item 1 */}
          <div className="item">
            &nbsp;Network
            <br />
            <select
              name="networkSelect"
              className="w-selectbox"
              onChange={handleChange}
              value={chainId}
            >
              <option value="1">Ethereum [1]</option>
              {/* <option value="137">Matic [137]</option> */}
              {/* <option value="8217">Klaytn [8217]</option> */}
            </select>
            <br />
            <br />
            {/* 0. RPC URL */}
            &nbsp;0. RPC URL
            <br />
            <div className="flex-wrapper">
              <input
                placeholder="ex) https://mainnet.infura.io/v3/..."
                className="w-input"
                name="rpcUrl"
                value={rpcUrl}
                onChange={handleChange}
              />
              <button className="connect-btn-sm" onClick={onClickSetProvider}>
                SET
              </button>
            </div>
            <br />
            {/* 1. GetCurrentBlockNumber */}
            &nbsp;1. GetCurrentBlockNumber
            <br />
            <div className="flex-wrapper">
              <input
                style={{ color: "yellow" }}
                disabled={true}
                className="w-input"
                name="currentBlockNumber"
                value={currentBlockNumber}
              />
              <button className="connect-btn-sm" onClick={getCurrentBlock}>
                CALL
              </button>
            </div>
            <br />
            {/* 2. GetBlockData */}
            &nbsp;2. GetBlockData
            <div className="flex-wrapper">
              <input
                className="w-input"
                name="blockNumber"
                value={blockNumber}
                onChange={handleChange}
                placeholder="blockNumber (ex: 18632622)"
              />
              <button className="connect-btn-sm" onClick={getBlockData}>
                CALL
              </button>
            </div>
            <br />
            {/* 3. GetTransaction */}
            &nbsp;3. GetTransactionReceipt
            <div className="flex-wrapper">
              <input
                className="w-input"
                name="trHash"
                value={trHash}
                onChange={handleChange}
                placeholder="trHsah (ex: 0x...)"
              />
              <button
                className="connect-btn-sm"
                onClick={getTransactionReceipt}
              >
                CALL
              </button>
            </div>
            <br />
            {/* 4.  */}
            &nbsp;5. ParseLogs
            <div className="flex-wrapper">
              <input
                className="w-input"
                name="trReceipt"
                value={trReceipt}
                onChange={handleChange}
                placeholder="transaction Receipts (ex: 0x...)"
              />
              <button
                className="connect-btn-sm"
                onClick={getTransactionReceipt}
              >
                CALL
              </button>
            </div>
            <br />
            {/*  */}
            <br />
            <br />
          </div>
          {/* flex item 1 end */}
          {/* flex item 2 */}
          <div className="item">
            <div style={{ display: "flex" }}>
              <div style={{ flex: 9 }}>
                <span>&nbsp;Response</span>
              </div>
              <div style={{ flex: 1, paddingRight: 2 }}>
                <button className="r-btn" disabled={isDisabled}>
                  filter1
                </button>
              </div>
              <div style={{ flex: 1, paddingRight: 2 }}>
                <button className="r-btn" disabled={isDisabled}>
                  filter2
                </button>
              </div>
              <div style={{ flex: 1, paddingRight: 2 }}>
                <button className="r-btn" disabled={isDisabled}>
                  filter3
                </button>
              </div>
              <div style={{ flex: 1, paddingRight: 2 }}>
                <button className="r-btn" disabled={isDisabled}>
                  filter4
                </button>
              </div>
              <div style={{ paddingRight: 1 }}>
                <button className="r-btn" disabled={isDisabled}>
                  filter5
                </button>
              </div>
            </div>
            <textarea className="m-textarea" disabled value={response} />
          </div>
          {/* flex item 2 end */}
        </div>
        <br />
      </section>
    </>
  );
}

export default Test;
