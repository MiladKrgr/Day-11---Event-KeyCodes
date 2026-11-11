const insert = document.getElementById('insert');


window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
      <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>Key.Code</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>event.Key.Code</small>
        </div>
        
        <div class="key">
            ${event.code}
            <small>event.Code</small>
        </div>
    `
})