console.log("Background script loaded.");

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("Tab updated:", changeInfo);

  if (changeInfo.status === "complete") {
    console.log("Tab update complete");
    console.log("Tab URL:", tab.url); // 追加したログ
    if (tab.url && tab.url.startsWith("https://opensea.io/")) {
      console.log("URL matches domain");
      console.log("Injecting scripts to tab:", tabId);
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["discriminate.js", "content.js", "collection_page.js", "other_page.js"],
      });
    } else {
      console.log("URL does not match domain");
    }
  } else {
    console.log("Tab update not complete");
  }
});
