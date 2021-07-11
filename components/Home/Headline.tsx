import styles from 'styles/Home.module.scss';
import Link from 'next/link';

type HeadlineProps = {};

const Headline: React.FC<HeadlineProps> = ({}) => {
    return (
        <section className={styles.Headline}>
            <div className={styles.Headline__cover}>
                <h1>Hey, I&lsquo;m <span>Atif Aiman!</span></h1>
                <p>
                    I&lsquo;m an enthusiast web developer, mainly on frontend development.
                    2 years and still counting, I spent my time improving myself, and also advocate
                    others to code as well. While you are here, you can <Link href='/about-me'><a>learn more about me</a></Link>.
                    {/* your wish <a>in my guestbook</a> or you can <a>learn more about me</a>. */}
                </p>
            </div>
        </section>
    );
};

export default Headline;