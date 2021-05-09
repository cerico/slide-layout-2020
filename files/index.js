
document.getElementById('tab-one').onclick = function(){
  document.getElementById('tab-two').classList.remove('in-view')
  document.getElementById('tab-three').classList.remove('in-view')
}

document.getElementById('tab-two').onclick = function(){
  document.getElementById('tab-two').classList.add('in-view')
  document.getElementById('tab-three').classList.remove('in-view')
}

document.getElementById('tab-three').onclick = function(){
  document.getElementById('tab-two').classList.add('in-view')
  document.getElementById('tab-three').classList.add('in-view')
}

const switchFavIcon = () => {
  if (!window.matchMedia)
  return;

  const current = document.querySelectorAll('head > link[rel="icon"][media]')

  current.forEach(function(icon) {
    const match = window.matchMedia(icon.media);
    function swap() {
      if (match.matches) {
        document.querySelector('head').appendChild(icon)
      }
    }
    match.addEventListener('change', swap)
    swap();
  })
}

document.addEventListener("DOMContentLoaded", switchFavIcon)
