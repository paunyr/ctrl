
document.querySelector('body').addEventListener('click', (event) => {

    let aTag = event.target.closest('a')
  
    if (!aTag) { return }
  
    if (!aTag.classList.contains('navigation')) { return }
    let href = aTag.getAttribute('href');
    if (href.indexOf('http') === 0) {
      aTag.setAttribute('target', '_blank');
      return;
    }
  
    event.preventDefault();
  
    history.pushState(null, null, href);
  
    router();
  
  
  });
  
  function changeActivePage(route) {
    let aTagsInNav = document.querySelectorAll('nav a');
    for (let aTag of aTagsInNav) {
      aTag.classList.remove('active');
      let href = aTag.getAttribute('href');
      if (href === route) {
        aTag.classList.add('active')
      }
    }
  }
  
  async function router() {
    let route = location.pathname;
  
    changeActivePage(route);
  
    route = route === '/' ? '/vad_ar_digitalt_vald' : route;
    route = '/partials' + route + '.html';
    let content = await (await fetch(route)).text();
    document.querySelector('main').innerHTML = content;
    // route === '/partials/about.html' && funFact();
  
  
  }
  
  window.addEventListener('popstate', router);
  
  router();