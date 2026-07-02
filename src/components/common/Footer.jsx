import '../../styles/common/Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__brand">ShopEase</p>
                <ul className="footer__links">
                    <li><a href="#" className="footer__link">About</a></li>
                    <li><a href="#" className="footer__link">Contact</a></li>
                    <li><a href="#" className="footer__link">Privacy</a></li>
                </ul>
                <p className="footer__copyright">&copy; {currentYear} ShopEase. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
