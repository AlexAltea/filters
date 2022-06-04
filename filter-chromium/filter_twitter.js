// Remove "What's happening" bullshit
let observer = new MutationObserver(mutations => {
    let column = document.querySelector("[data-testid^='sidebarColumn']");
    let widget = column.firstChild.lastChild.firstChild.firstChild.firstChild.childNodes[2];
    widget.remove();
    observer.disconnect();
})
observer.observe(document.body, { childList: true, subtree: true });
