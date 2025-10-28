
(function(){
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  const btn = document.getElementById('themeToggle');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || (!stored && prefersLight)) document.documentElement.classList.add('light');
  if (btn){
    btn.addEventListener('click', ()=>{
      document.documentElement.classList.toggle('light');
      localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
    });
  }
})();
