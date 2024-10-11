const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL('styles.css');
document.head.appendChild(link);

window.addEventListener('load', () => {
    const newBtn = document.createElement("button");
    newBtn.className = "custom-button";
    newBtn.textContent = "Click Me";
    newBtn.addEventListener("click", () => {
        chrome.runtime.sendMessage({ action: "openPopup" });
    });
    document.body.appendChild(newBtn);
});