import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">

        <div className="footerBrand">
          <h3>SHOP.CO</h3>
          <p>Find clothes that match your style.</p>
        </div>

        <div className="footerLinks">
          <div>
            <h4>Company</h4>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
          </div>

          <div>
            <h4>Help</h4>
            <p>Support</p>
            <p>FAQs</p>
            <p>Contact</p>
          </div>

          <div>
            <h4>Legal</h4>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>

      </div>

      <p className="footerBottom">
        © 2025 Shop.co. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
