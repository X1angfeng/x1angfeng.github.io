// <!-- 标题动态切换代码 Start -->
window.onload = function () {
  let hour = new Date().getHours()
  let str = ''
  if (hour < 6) {
    str = '凌晨'
  } else if (hour < 9) {
    str = '早上'
  } else if (hour < 12) {
    str = '上午'
  } else if (hour < 14) {
    str = '中午'
  } else if (hour < 17) {
    str = '下午'
  } else if (hour < 19) {
    str = '傍晚'
  } else if (hour < 22) {
    str = '晚上'
  } else {
    str = '夜里'
  }
 
  function c () {
    document.title = document[a] ? '🤣 Hi,小伙伴,' + str + '好! [' + d + ']' : d
  }
 
  let a = document.title
  let b = document.title
  let d = document.title
  typeof document.hidden !== 'undefined' ? (a = 'hidden', b = 'visibilitychange')
    : typeof document.mozHidden !== 'undefined' ? (a = 'mozHidden', b = 'mozvisibilitychange')
    : typeof document.webkitHidden !== 'undefined' && (a = 'webkitHidden', b = 'webkitvisibilitychange')
  typeof document.addEventListener === 'undefined' && typeof document[a] === 'undefined' || document.addEventListener(b, c, !1)
}
// <!-- 标题动态切换代码 End -->
