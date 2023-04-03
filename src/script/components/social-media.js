class SocialMedia extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="container p-4 pb-0">
            <section class="mb-4">
                <a class="btn text-white btn-floating m-1" target="_blank" style="background-color: #3b5998;" href="https://www.facebook.com/raicuul" role="button"><i class="fab fa-facebook-f"></i></a>

                <a class="btn text-white btn-floating m-1" target="_blank" style="background-color: #55acee;" href="https://twitter.com/raicuul" role="button"><i class="fab fa-twitter"></i></a>

                <a class="btn text-white btn-floating m-1" target="_blank" style="background-color: #ac2bac;" href="https://www.instagram.com/raicuul/" role="button"><i class="fab fa-instagram"></i></a>

                <a class="btn text-white btn-floating m-1" target="_blank" style="background-color: #0082ca;" href="https://www.linkedin.com/in/raisul-amin-r-2b7300267/" role="button"><i class="fab fa-linkedin-in"></i></a>

                <a class="btn text-white btn-floating m-1" target="_blank" style="background-color: #333333;" href="https://github.com/raicuul42" role="button"><i class="fab fa-github"></i></a>
            </section>
        </div>
        `
    }
}

customElements.define('social-media', SocialMedia)