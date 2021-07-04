// Importing dependencies
import Link from 'next/link';
import Image from 'next/image';
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

// Importing stylesheets
import styles from 'styles/PUM.module.scss';

const socmedSize = "36px";

type PUMProps = {
    title?: string,
}

const PUM: React.FC<PUMProps> = ({
    title = 'Under construction',
}) => {
  return (
    <>
      <h1 className={styles.icon}>🚧</h1>
      <p>{title}</p>

      <div className={styles.seperator} />

      <p>How about connecting to my social media?</p>
      <div className={styles.cta}>
        
        <Link href="/twitter">
          <a target="_blank" id="footer_twitter" className={styles.twitter} aria-label="My Twitter">
              <IoLogoTwitter size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/facebook">
          <a target="_blank" id="footer_facebook" className={styles.facebook} aria-label="My Facebook">
              <IoLogoFacebook size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/behance">
          <a target="_blank" id="footer_behance" className={styles.behance} aria-label="My Behance">
              <IoLogoBehance size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/github">
          <a target="_blank" id="footer_github" className={styles.github} aria-label="My Github">
              <IoLogoGithub size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/linkedin">
          <a target="_blank" id="footer_linkedin" className={styles.linkedin} aria-label="My LinkedIn">
              <IoLogoLinkedin size={socmedSize} />
          </a>
        </Link>
                    
        <Link href="/medium">
          <a target="_blank" id="footer_medium" className={styles.medium} aria-label="My Medium Articles">
            <IoLogoMedium size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/devto">
          <a target="_blank" id="footer_devto" className={styles.devto} aria-label="My Dev Dot To Article">
              <FaDev size={socmedSize} />
          </a>
        </Link>

      </div>

      <div className={styles.seperator} />

      <div className={styles.support}>
        <p>You can also support me if you think that I am cool!</p>
        
        <Link href="/buymeacoffee">
          <a target="_blank" id="buymeacoffee">
            <Image
              src="/images/button_buymeacoffee.png"
              alt="Buy me a coffee!"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </a>
        </Link>
        
      </div>
    </>
  )
}

export default PUM;
