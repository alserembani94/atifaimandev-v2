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
          <a target="_blank" id="twitter" className={styles.twitter}>
              <IoLogoTwitter size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/facebook">
          <a target="_blank" id="facebook" className={styles.facebook}>
              <IoLogoFacebook size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/behance">
          <a target="_blank" id="behance" className={styles.behance}>
              <IoLogoBehance size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/github">
          <a target="_blank" id="github" className={styles.github}>
              <IoLogoGithub size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/linkedin">
          <a target="_blank" id="linkedin" className={styles.linkedin}>
              <IoLogoLinkedin size={socmedSize} />
          </a>
        </Link>
                    
        <Link href="/medium">
          <a target="_blank" id="medium" className={styles.medium}>
            <IoLogoMedium size={socmedSize} />
          </a>
        </Link>
        
        <Link href="/devto">
          <a target="_blank" id="devto" className={styles.devto}>
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