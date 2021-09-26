require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth misery come grace nation equal gift'; 
let testAccounts = [
"0x9f1ce4eefa98b4d01f07b4577940670d77053be6a18ad9e85ca00ac1ea635f4d",
"0x083840aa5b2a7ec7de634baee961045a1a791f42d75e0d99b95405c2bc653b59",
"0x5829dfa796a64914d2e49a489525e74e7897051225fbca74fe265fd097942ebc",
"0x23048d13499a47aecd3edb94d46c9d94c20b980b9ca9c484f242a8d1f729cf4c",
"0x92425596cb15aa15e5b7c64e1dcff33861992f172d9436d297390b1d2d40427a",
"0x336b70340857feac17608972fea90b259877d5e7f9644892296487ad2d401f4d",
"0x41347bcf115474eb771bf50210e1490584bab95911720f6ddd309937e44e49c3",
"0xbca511535c86486fb5eb7ecf8f8b9ed0a0586f8387a597657c9ab92d9947efed",
"0x95150769bb7437e77346f7249be96be66eb80dbb2e743048abaed1d97ea16005",
"0x942a59ef44c3f27b24710ef0d02996a4553de08b19857940340511d0db3827f2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


