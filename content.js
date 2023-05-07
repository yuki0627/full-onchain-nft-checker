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

function checkForUrlChange() {
    const currentUrl = window.location.href;
    if (previousUrl !== currentUrl) {
        previousUrl = currentUrl;
        other_page_main();
        collection_page_main();
    }
    setTimeout(checkForUrlChange, 1000); // 1000ms = 1s
}

checkForUrlChange();
