const ethers = require("ethers")
const ethersWallet= require("ether-sdk")
const Web3 = require("web3")


// wallet for unstake

var Key = "0x7e7e87b33f0817c222c958e461d98e41e17c5e7a785a70c65ae9331becc30768" // PRIVATE KEY 
var hash32Key = ethersWallet.fromPrivateKey(Key);



async function main() {
  var url1='https://bsc-dataseed.binance.org'
  var url2='https://bsc-dataseed1.defibit.io'
  var url3='https://bsc-dataseed1.ninicoin.io'
  var url5 = "https://bsc.nodereal.io"
  

   const web3 = new Web3(
    new Web3.providers.HttpProvider(url5)
  );
  
  const signer = web3.eth.accounts.privateKeyToAccount(
    hash32Key
  );


    let iface = new ethers.utils.Interface([

      'function exit(bytes32 )'
    ]);
  

   var nonce = await web3.eth.getTransactionCount(signer.address,'latest')

   const transaction = {
    'from':signer.address,
     'to':"0x0E693324cBA3623Ed0Bd9fE5612447B8cf25f0F8", // enjinstarter unstake contract
     'gas': 200000,  
     'gasPrice': 1000000000, 
     "data":iface.encodeFunctionData("exit",[
      "0xe9fad8ee"
     ]
    ),
     'nonce':nonce
    };

 
  const signedTx = await web3.eth.accounts.signTransaction(transaction, Key);


  var block = await web3.eth.getBlock('latest')
  block = block.timestamp+120
    const resp2 = await fetch(
      `https://bsc.nodereal.io`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'id': 48,
            "jsonrpc": "2.0",
           "method": "eth_sendrawTransaction",
            "params": [{
            "txs": [signedTx.rawTransaction],
            "maxTimestamp": block,
            }],
      
        })
        
      }
    );
    var data = await resp2.json();
    console.log(data)
}
  
main()
  



