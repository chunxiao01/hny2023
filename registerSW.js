if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/hny2023/sw.js', { scope: '/hny2023/' })})}