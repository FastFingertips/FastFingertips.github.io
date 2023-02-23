function generateUserAgent() {
  var deviceCategory = ['desktop', 'mobile', 'tablet'];
  var osList = ['Windows', 'Linux', 'Macintosh', 'Android', 'iOS'];
  var browserList = ['Chrome', 'Firefox', 'Safari', 'Edge', 'Opera'];
  var userAgent = 'Mozilla/5.0 (' + deviceCategory[Math.floor(Math.random()*deviceCategory.length)] + '; ' +
                  osList[Math.floor(Math.random()*osList.length)] + '; ' +
                  browserList[Math.floor(Math.random()*browserList.length)] + '/' +
                  Math.floor(Math.random() * (99 - 1 + 1) + 1) + '.' +
                  Math.floor(Math.random() * (999 - 100 + 1) + 100) + '.' +
                  Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) + ') ' +
                  'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/' +
                  Math.floor(Math.random() * (99 - 1 + 1) + 1) + '.' +
                  Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) + '.' +
                  Math.floor(Math.random() * (999 - 100 + 1) + 100) + '.' +
                  Math.floor(Math.random() * (99 - 10 + 1) + 10) + ' Safari/537.36';
  var date = new Date().toLocaleString();
  var html = "<tr><td>" + userAgent + "</td><td>" + date + "</td></tr>";
  $("#user-agent-table tbody").prepend(html);
}