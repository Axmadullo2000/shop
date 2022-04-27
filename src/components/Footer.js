function Footer() {
    return (
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="footerContent">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="footer__bottom-part">
            © { new Date().getFullYear() } Copyright Text
            <a class="grey-text text-lighten-4 right repo" href="#!" style={{  }}>Repo</a>
            </div>
          </div>
        </footer>
    )
}

export default Footer;


