require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remain equip give fork bottom suit'; 
let testAccounts = [
"0xd3b2e151cab0684c380471f9e0a0e39fa05fc13dc113724ed0970498824ab10c",
"0x745300659adfebe2f42f7d497630a9b656b70674fa67f84b9bc7b9324e59b50e",
"0x14ab353fd9e9d81547724fd581d275d0cd88c5c38055250e808819ed16ccb595",
"0xc33f61ec97f7fc862aad4a79cbdd8e17077d008e0f56b176f3eb4d50e17fd4f8",
"0x62944fe3917b54bd29328ad55f42c4d82d13563ca60c3b7e44fc537df2a96a1a",
"0x4318e2bb2f1f16218e1c71aacfd67bf0643bf00f5dae52057f1e67749c159fa0",
"0x642a218821823f4048fd7735b153d4b1c857c1d4909b9b0ace248f09b7de84e8",
"0x61f87619d230f370c738968dffe85e15de1fc30052668ba30ee5d225e32aaf80",
"0x6d84e440f5c27c2a6ee5023cf51b2cc0c476fc911bc559092f9786cbba6cceba",
"0x36a5c5c7e85f94ef155a222a60811bad125752fef60b1504c6c757ab56e0d368"
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


