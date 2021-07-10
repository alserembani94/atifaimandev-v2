import styles from 'styles/Home.module.scss';
// Importing dependencies
import Link from 'next/link';
import Image from 'next/image';
// import { DateTime } from 'luxon';

type BannerProps = {};

const Banner: React.FC<BannerProps> = ({}) => {
    return (
        <section className={styles.BMAC}>
            <div className={styles.BMAC__sections}>
                <h4>Do you think I am cool?</h4>
                <p>You can reach me at one of my social media by DM me directly 😉. You can also support my journey by buying me a cup of coffee ☕.</p>
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
        </section>
    );
};

export default Banner;