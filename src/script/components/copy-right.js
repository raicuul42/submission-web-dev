class CopyRight extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright:
            <a class="text-white" href="#">AyoDoa</a>
        </div>
        `
    }
}

customElements.define('copy-right', CopyRight)