
document.getElementById('tab-one').onclick = function(){
  document.getElementById('tab-two').classList.remove('tab-two-in-view')
  document.getElementById('tab-three').classList.remove('tab-three-in-view')
}

document.getElementById('tab-two').onclick = function(){
  document.getElementById('tab-two').classList.add('tab-two-in-view')
  document.getElementById('tab-three').classList.remove('tab-three-in-view')
}

document.getElementById('tab-three').onclick = function(){
  document.getElementById('tab-two').classList.add('tab-two-in-view')
  document.getElementById('tab-three').classList.add('tab-three-in-view')
}