// Import all dependencies
import Link from 'next/link';
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoBehance,
  IoLogoLinkedin,
  IoLogoMedium,
} from 'react-icons/io5';
import {
  FaDev,
} from 'react-icons/fa';

// Import all stylesheets
import styles from 'styles/Footer.module.scss';

const socmedSize = '24px';

const Layout: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__lowerSection}>
                <p>Pixels built by Atif Aiman | 2021</p>
                <div className={styles.footer__cta}>
        
                    <Link href="/twitter">
                        <a target="_blank" id="twitter" className={styles.twitter} aria-label="My Twitter">
                            <IoLogoTwitter size={socmedSize} />
                        </a>
                    </Link>
                    
                    <Link href="/facebook">
                        <a target="_blank" id="facebook" className={styles.facebook} aria-label="My Facebook">
                            <IoLogoFacebook size={socmedSize} />
                        </a>
                    </Link>
                    
                    <Link href="/behance">
                        <a target="_blank" id="behance" className={styles.behance} aria-label="My Behance">
                            <IoLogoBehance size={socmedSize} />
                        </a>
                    </Link>
                    
                    <Link href="/github">
                        <a target="_blank" id="github" className={styles.github} aria-label="My Github">
                            <IoLogoGithub size={socmedSize} />
                        </a>
                    </Link>
                    
                    <Link href="/linkedin">
                        <a target="_blank" id="linkedin" className={styles.linkedin} aria-label="My LinkedIn">
                            <IoLogoLinkedin size={socmedSize} />
                        </a>
                    </Link>
                    
                    <Link href="/medium">
                        <a target="_blank" id="medium" className={styles.medium} aria-label="My Medium Articles">
                            <IoLogoMedium size={socmedSize} />
                        </a>
                    </Link>
        
                    <Link href="/devto">
                        <a target="_blank" id="devto" className={styles.devto} aria-label="My Dev Dot To Article">
                            <FaDev size={socmedSize} />
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Layout;