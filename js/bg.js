export function route(page) {
  document.documentElement.classList.remove('bgHome', 'bgUni', 'bgExp')
  if(page == '/') {
    document.documentElement.classList.add('bgHome')
  }
  if(page == '/universe') {
    document.documentElement.classList.add('bgUni')
  }
  if(page == '/exploration') {
    document.documentElement.classList.add('bgExp')
  }
}