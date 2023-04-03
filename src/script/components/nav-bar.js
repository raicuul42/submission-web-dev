class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-dark d-block" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    AyoDoa | Kumpuan Doa-Doa Harian</a>
            </div>
        </nav>
        `;
  }
}
customElements.define("nav-bar", NavBar);
