import { useState } from "react";
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Thank you!',
            html: `You have successfully subscribed with: <b>${email}</b>`,
            icon: 'success',
            confirmButtonText: 'Close'
        });

        setEmail("");
    };

    return (
        <footer className="contactus" id="contact">
            <div className="fgrid">
                <div className="fitem">
                    <h3>Contact</h3>
                    <p>Phone: +34 019 451 561</p>
                    <p>Email: support@bananacompanies.ltd</p>
                    <p>Address: Banana Street 42, Barcelona, Spain</p>
                </div>

                <div className="fitem">
                    <h3>Follow us</h3>
                    <p>
                        <FontAwesomeIcon icon={faFacebook} />
                        <a href="https://www.facebook.com/@bananaltd" target="_blank" rel="noreferrer">Facebook</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faTwitter} />
                        <a href="https://www.twitter.com/@bananaltd" target="_blank" rel="noreferrer">Twitter</a>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faInstagram} />
                        <a href="https://www.instagram.com/@bananaltd" target="_blank" rel="noreferrer">Instagram</a>
                    </p>
                </div>

                <div className="fitem">
                    <form onSubmit={handleSubmit}>
                        <h3>Subscribe</h3>
                        <p>Subscribe to our newsletter to receive updates.</p>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <button type="submit" className="btn">
                            Subscribe!
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;