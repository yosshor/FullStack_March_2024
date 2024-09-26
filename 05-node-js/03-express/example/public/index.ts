const timer = document.getElementById('time');
setInterval(() => {
    if (timer)
        timer.textContent = new Date().toLocaleTimeString();
}, 1000);