// Enable chromereload by uncommenting this line:
if(process.env.NODE_ENV === 'development') {
  require('chromereload/devonly');
}

chrome.contextMenus.create({
  'type': 'normal',
  'title': '扫描页面',
  'id': 'scan',
  'onclick': () => {}
})

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: 'hex'});
