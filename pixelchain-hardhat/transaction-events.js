const { Web3 } = require('web3');

const web3 = new Web3('http://127.0.0.1:8545/');

const privateKey = '0x1ecac2852c26aea26896a2a28046a5d75e40dab7e1a56ed0c9f885457d1e1bf8';
const sender = web3.eth.accounts.wallet.add(privateKey)[0];

const receiver = web3.eth.accounts.create();

web3.eth
	.sendTransaction({
		from: sender.address,
		to: receiver.address,
		value: 100,
	})
	.on('sending', sending => {
		console.log('Sending:', sending);
	})
	.on('sent', sent => {
		console.log('Sent:', sent);
	})
	.on('transactionHash', transactionHash => {
		console.log('Transaction Hash:', transactionHash);
	})
	.on('receipt', receipt => {
		console.log('Receipt:', receipt);
	})
	.on('confirmation', confirmation => {
		console.log('Confirmation:', confirmation);
		process.exit(0);
	})
	.on('error', error => {
		console.log('Error:', error);
		process.exit(1);
	});