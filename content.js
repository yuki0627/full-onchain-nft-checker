console.log('content.js loaded');

const collectionPageRegex = /https:\/\/opensea\.io\/collection\/([\w-]+)/;
const isCollectionPage = window.location.href.match(collectionPageRegex);
const domainRegex = /^https:\/\/opensea\.io\//;
const isDomain = window.location.href.match(domainRegex);

if (isCollectionPage) {
    console.log('collection_page_main_call');
    collection_page_main();
} else if (isDomain) {
    console.log('other_page_main_call');
    other_page_main();
}
