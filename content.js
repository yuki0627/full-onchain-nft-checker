function getCollectionNameByUrl() {
    const url = window.location.href;
    const collectionNameRegex = /https:\/\/opensea\.io\/collection\/([\w-]+)/;
    const match = url.match(collectionNameRegex);
  
    if (match) {
      return match[1];
    } else {
      return null;
    }
}

let previousUrl = '';

const collectionPageRegex = /https:\/\/opensea\.io(\/[a-z]{2})?\/collection\/([\w-]+)/;
const domainRegex = /^https:\/\/opensea\.io(\/[a-z]{2})?\//;

function checkForUrlChange() {
    const currentUrl = window.location.href;
    if (previousUrl !== currentUrl) {
        previousUrl = currentUrl;
        
        const isCollectionPage = Boolean(currentUrl.match(collectionPageRegex));
        const isDomain = !isCollectionPage && Boolean(currentUrl.match(domainRegex));

        console.log('isCollectionPage:', isCollectionPage);
        console.log('isDomain:', isDomain);
        
        if (isCollectionPage) {
            collection_page_main();
        } else if (isDomain) {
            other_page_main();
        }
    }
    setTimeout(checkForUrlChange, 1000); // 1000ms = 1s
}

checkForUrlChange();

