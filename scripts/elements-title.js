// Buttons

//Dark Theme Button
class themeButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <div id="switchyContainerRelative">
      <div id="theme">Theme</div>
      <div id="switchyContainerAbsolute">
        <button id="switchy" onClick="switchyDarkTheme()" title="Theme">
          <i class="indicator"/>
        </button>
      </div>
    </div>
    `
  }
}
customElements.define("theme-button", themeButton);

//Editor Mode Button
class editorButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <div id="toggleContainerRelative">
      <div id="edit-doc">Editor Mode</div>
      <div id="editorModeContainerAbsolute">
        <button id="editor-mode" onclick="editorMode()" title="Editor Mode">
          <i class="indicator"></i>
        </button>
      </div>
    </div>
    `
  }
}
customElements.define("editor-button", editorButton);

console.log("elements-title.js is completed");
