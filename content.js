(function() {
    const message = document.createElement('div');
    message.style.position = 'fixed';
    message.style.top = '10px';
    message.style.right = '10px';
    message.style.zIndex = '10000';
    message.style.backgroundColor = 'white';
    message.style.padding = '10px';
    message.style.border = '1px solid black';
    message.style.borderRadius = '5px';
    message.textContent = 'Hello, World!';
    document.body.appendChild(message);
  })();