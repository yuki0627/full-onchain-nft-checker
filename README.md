# Full On-chain NFT Checker - Chrome Extension

**Full On-chain NFT Checker** is a Chrome extension designed to determine whether an NFT displayed on OpenSea is stored on-chain or off-chain. This distinction is made using our API that processes the underlying details of the NFT.

## Features

- 🚀 **Instant NFT Verification**: Automatically verify if an NFT on OpenSea is fully on-chain or off-chain when you visit a specific NFT or collection page.
- 🔒 **Privacy Focused**: The extension doesn't collect or share any user data. All determinations are made using public NFT data.
- 🌐 **API Driven**: Utilizes the powerful API we developed to fetch and process data reliably.

## Installation

1. **Clone or Download the Repository**: Clone this repository to your local machine or download it as a zip file and extract it.
2. **Load in Chrome**:
   - Open Chrome and go to `chrome://extensions/`.
   - Enable `Developer mode` at the top right.
   - Click `Load unpacked` and select the repository folder (or the folder where you extracted the zip file).
   - The extension icon should now appear in your Chrome toolbar.

## Usage

1. **Visit OpenSea**: Navigate to OpenSea.
2. **Go to a Specific Collection or NFT Page**: The extension will automatically analyze NFTs only on specific collection pages or individual NFT pages. The general TOP page or pages with multiple collections are not analyzed.
3. **View Results**: As you browse, the extension will indicate whether the NFT is on-chain or off-chain without any manual intervention.

## Development

This extension is powered by our backend API which determines the NFT storage type. For details on the API and its cloud functions, refer to our [API repository](https://github.com/yuki0627/full-onchain-nft-checker-api).

## Feedback and Contributions

We appreciate feedback and contributions to improve the extension. Please raise an issue or submit a pull request on our [GitHub repository](https://github.com/yuki0627/full-onchain-nft-checker).
