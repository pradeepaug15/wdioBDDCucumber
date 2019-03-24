export default class Page {
  open (path) {
    browser.url(path)
    browser.windowHandleSize({width:1280,height:800});
  }
}