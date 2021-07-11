import styles from 'styles/About.module.scss';

// Importing dependencies
import Image from 'next/image';
import { IconContext } from 'react-icons';
import Script from 'next/script';
import {
    SiNextDotJs,
    SiReact,
    SiStrapi,
    SiAmazonaws,
    SiVueDotJs,
    SiTypescript,
    SiAdobexd,
    SiAdobeillustrator,
    SiAdobeaftereffects,
    SiFigma,
} from 'react-icons/si';
import {
    IoLogoVercel,
    IoLogoNodejs,
} from 'react-icons/io5';

type StackProps = {};

const description = `
    Proudly to say, I tailored this website personally using NextJS 11, and pixels carefully crafted using SCSS.
    Some call me artisan, but I am just love to explore design (though I still feel not great on design part despite many years in design domain).
    With Static Site Generation (SSG) and Server Side Rendering (SSR) as a breakthrough technology these days,
    I keep leveraging my free time project, such as this, to learn more thing, for I firmly believe the learning
    process is a never-ending journey.
`;


const Stack: React.FC<StackProps> = () => {
    return (
        <section className={styles.Stack}>
            <div className={styles.Stack__container}>
                <h2>What powers my web?</h2>
                <p>{description}</p>
                <p>Want to see my code? Sure! Please treat yourself with my code behind my website 😁</p>
                <blockquote className="twitter-tweet">
                    <p lang="und" dir="ltr">
                        <a href="https://t.co/1rAFiDzG8K">
                            https://t.co/1rAFiDzG8K
                        </a>
                    </p>
                    &mdash; Atif al-Serembani（あチップ) (@alserembani)
                    <a href="https://twitter.com/alserembani/status/1414324221640003584?ref_src=twsrc%5Etfw">
                        July 11, 2021
                    </a>
                </blockquote>
                <Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></Script>
            </div>

            
            <div className={styles.Stack__container}>
                <h2>My stack</h2>
                <div className={styles.Stack__section}>
                    <h5>atifaiman.dev</h5>
                    <div className={styles.Stack__logo}>
                        <IconContext.Provider value={{ className: "typescript" }}>
                            <div>
                                <SiTypescript size={50} />
                                <p>Typescript</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "nextdotjs" }}>
                            <div>
                                <SiNextDotJs size={50} />
                                <p>NextJS</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "reactjs" }}>
                            <div>
                                <SiReact size={50} />
                                <p>React</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "vercel" }}>
                            <div>
                                <IoLogoVercel size={50} />
                                <p>Vercel</p>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className={styles.Stack__section}>
                    <h5>Main Expertise</h5>
                    <div className={styles.Stack__logo}>
                        <IconContext.Provider value={{ className: "nodejs" }}>
                            <div>
                                <IoLogoNodejs size={50} />
                                <p>NodeJS</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "typescript" }}>
                            <div>
                                <SiTypescript size={50} />
                                <p>Typescript</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "reactjs" }}>
                            <div>
                                <SiReact size={50} />
                                <p>React</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "nextdotjs" }}>
                            <div>
                                <SiNextDotJs size={50} />
                                <p>NextJS</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "vercel" }}>
                            <div>
                                <IoLogoVercel size={50} />
                                <p>Vercel</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "strapi" }}>
                            <div>
                                <SiStrapi size={50} />
                                <p>Strapi</p>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
                
                <div className={styles.Stack__section}>
                    <h5>Honorable Mention</h5>
                    <div className={styles.Stack__logo}>
                        <IconContext.Provider value={{ className: "aws" }}>
                            <div>
                                <SiAmazonaws size={50} />
                                <p>AWS</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "vue" }}>
                            <div>
                                <SiVueDotJs size={50} />
                                <p>Vue</p>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className={styles.Stack__section}>
                    <h5>Other Skills</h5>
                    <div className={styles.Stack__logo}>
                        <IconContext.Provider value={{ className: "adobexd" }}>
                            <div>
                                <SiAdobexd size={50} />
                                <p>Adobe XD</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "adobeai" }}>
                            <div>
                                <SiAdobeillustrator size={50} />
                                <p>Adobe Illustrator</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "adobeae" }}>
                            <div>
                                <SiAdobeaftereffects size={50} />
                                <p>Adobe After Effects</p>
                            </div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "figma" }}>
                            <div>
                                <SiFigma size={50} />
                                <p>Figma</p>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stack;