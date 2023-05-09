const MESSAGE_ID = "my-extension-message";

const collectionNameRegex = /https:\/\/(?:testnets\.)?opensea\.io\/collection\/([\w-]+)/;
// const collectionPageRegex = /https:\/\/(?:testnets\.)?opensea\.io(\/[a-z]{2})?\/collection\/([\w-]+)/;
const domainRegex = /^https:\/\/(?:testnets\.)?opensea\.io(\/[a-z]{2})?\//;

function getCollectionNameByUrl() {
    const url = window.location.href;
    const match = url.match(collectionNameRegex);
  
    if (match) {
      return match[1];
    } else {
      return null;
    }
}

function removeOverlayText() {
  const existingMessage = document.querySelector(`#${MESSAGE_ID}`);
  if (existingMessage) {
    existingMessage.remove();
  }
}

let previousUrl = '';

function checkForUrlChange() {
    const currentUrl = window.location.href;
    if (previousUrl !== currentUrl) {
        previousUrl = currentUrl;
        
        const isCollectionPage = Boolean(currentUrl.match(collectionPageRegex));
        const isDomain = !isCollectionPage && Boolean(currentUrl.match(domainRegex));

        console.log('isCollectionPage:', isCollectionPage);
        console.log('isDomain:', isDomain);
        removeOverlayText();
        if (isCollectionPage) {
            collection_page_main();
        } else if (isDomain) {
            other_page_main();
        }
    }
    setTimeout(checkForUrlChange, 1000); // 1000ms = 1s
}

checkForUrlChange();
