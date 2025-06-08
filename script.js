const h1 = document.createElement('h1');
h1.textContent = 'Hello, World!';
h1.style.opacity = '0';
h1.style.transition = 'opacity 0.5s';

document.body.appendChild(h1);

setTimeout(() => {
    h1.style.opacity = '1';
    setTimeout(() => {
        h1.style.opacity = '0';
    }, 1000); // visible for 1 second
}, 100); // slight delay to trigger transition