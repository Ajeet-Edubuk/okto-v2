
// import { SessionKey } from "./sessionKey";
// import { oktoAuthTokenGenerator } from "./oktoAuthTokenGenerator";
// import { type SessionConfig } from "./utils/invokeExecuteUserOp";
// import { rawTransaction } from "./rawTransaction";


// interface EVMRawTransaction {
//   from: string;
//   to: string;
//   data?: string;
//   value?: string;
// }

// interface Data {
//   caip2Id: string;
//   transaction: EVMRawTransaction;
// }

// const Transaction = () => {
  
//   const treasuryAPIkey =
//     "0xc1af1e4948bbb34cfb38edc2b5c003a9740c8b4fbde9868f8b5459e7bfaf5e2b";

//   const session = SessionKey.fromPrivateKey(treasuryAPIkey);
//   const sessionConfig: SessionConfig = {
//     sessionPrivKey: session.privateKeyHexWith0x,
//     sessionPubkey: session.uncompressedPublicKeyHexWith0x,
//     userSWA: "0x19b8a978fBE2a09C7517174A51dA38851D38168c",
//   };

//   const abi = [
//     {
//       inputs: [
//         {
//           internalType: "address",
//           name: "to",
//           type: "address",
//         },
//         {
//           internalType: "string[]",
//           name: "tokenURIs",
//           type: "string[]",
//         },
//       ],
//       name: "mintMyNFT",
//       outputs: [],
//       stateMutability: "nonpayable",
//       type: "function",
//     },
//   ];

//   const rawTx = async () => {
//     const authToken = await oktoAuthTokenGenerator();
//     console.log("Auth Token: ", authToken);
//     try {
//       const uris = [
//         "bafkreicojn2jmuymgcccwqznmntyyvendd47jwccvtnqpwaung6mvkrrta",
//       ];
//       const iface = new ethers.utils.Interface(abi);
//       const txData = iface.encodeFunctionData("mintMyNFT", [
//         "0x1594ab9BB28Cbf92678c4bCeaD1Ff1F99BEd629D",
//         uris,
//       ]);

//       const data: Data = {
//         caip2Id: "eip155:80002", // POLYGON_TESTNET_AMOY
//         transaction: {
//           from: "0x75FB35D998bDb614F67cc5ea1Bb35cEFf09eE1E8", // TWA
//           to: "0x3201Cd1833f07CC666A8C224f9D868A48dF384eF", // NFT contract address
//           data: txData, // Default empty data
//           value: "0x00", // Default value of 0
//         },
//       };

//       /* if sponsorship is not enabled */
//       await rawTransaction(data, sessionConfig);
//     } catch (error) {
//       console.error("Error fetching raw transaction:", error);
//     }
//   };

//   const getNFT = async () => {
//     const authToken = await oktoAuthTokenGenerator();
//     console.log("Auth Token: ", authToken);
//     try {
//       const response = await fetch(
//         "https://sandbox-api.okto.tech/api/oc/v1/readContractData",
//         {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             "caip2id": "eip155:80002",
//             "data": {
//               contractAddress: "0x3201Cd1833f07CC666A8C224f9D868A48dF384eF",
//               "abi": {
//                 inputs: [
//                   {
//                     internalType: "address",
//                     name: "user",
//                     type: "address",
//                   },
//                 ],
//                 name: "getTokenIds",
//                 outputs: [
//                   {
//                     internalType: "uint256[]",
//                     name: "",
//                     type: "uint256[]",
//                   },
//                 ],
//                 stateMutability: "view",
//                 type: "function",
//               },
//               "args": {
//                 user: "0x1594ab9BB28Cbf92678c4bCeaD1Ff1F99BEd629D",
//               },
//             },
//           }),
//         }
//       );

//       const data = await response.json();
//       console.log("NFT Data:", data);
//     } catch (error) {
//       console.error("Error fetching NFT data:", error);
//     }
//   };

//   return (
//     <div className="p-4 w-full flex justify-center items-center flex-col gap-4">
//       <h1 className="text-black">Transaction</h1>
//       <p>This is the Transaction component.</p>
//       <button
//         onClick={rawTx}
//         className=" font-bold px-4 py-2 border-2 border-black rounded"
//       >
//         Test Tx
//       </button>
//       <button
//         onClick={getNFT}
//         className=" font-bold px-4 py-2 border-2 border-black rounded"
//       >
//         Fetch NFT
//       </button>
//     </div>
//   );
// };

// export default Transaction;
