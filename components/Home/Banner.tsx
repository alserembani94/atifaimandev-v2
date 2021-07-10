import styles from 'styles/Home.module.scss';
import Link from 'next/link';
// import { DateTime } from 'luxon';

type BannerProps = {};

const Banner: React.FC<BannerProps> = ({}) => {
    return (
        <section className={styles.Banner}>
            <div className={styles.Banner__cover}>
                <h1>Hey, I&lsquo;m <span>Atif Aiman!</span></h1>
                <p>
                    I&lsquo;m an enthusiast web developer, mainly on frontend development.
                    2 years and still counting, I spent my time improving myself, and also advocate
                    others to code as well. While you are here, you can <Link href='/about-me'><a>learn more about me</a></Link>.
                    {/* your wish <a>in my guestbook</a> or you can <a>learn more about me</a>. */}
                </p>
            </div>
            <div className={styles.Banner__sections}>
                <h2>My Timeline</h2>

                <div>
                    <h5>2021</h5>
                    <ul>
                        <li>
                            <h6>System Developer @ Toyyibpay (Aug)</h6>
                            <p>
                                Extremely excited to work along with the new generation of Toyyibpay 😉
                            </p>
                        </li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h5>2020</h5>
                    <ul>
                        <li>
                            <h6>Full Stack Developer @ Qijang Technologies (Sept)</h6>
                            <p>
                                An e-commerce plaform, integrating Lazada, Shopee and others for omnichannel shopping experience.
                            </p>
                        </li>
                        <li>
                            <h6>Developed Jombuat 👨‍👩‍👧‍👦</h6>
                            <p>
                                A listing platform, featuring all developers from Malaysia, Indonesia, Singapore and Brunei. Of course, others are welcome too! Starting as a just-an-impromptu hackaton with <a href="https://fajarsiddiq.com/" target="_blank" rel="noopener noreferrer">Fajar Siddiq</a> during JomLaunch annual event, now it is live for everyone!
                            </p>
                        </li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h5>2019</h5>
                    <ul>
                        <li>
                            <h6>Frontend Developer @ SPEZA (Nov)</h6>
                            <p>
                                My first company, working on cryptocurrency trading platform. So excited for my first job!
                            </p>
                        </li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h5>2018</h5>
                    <ul>
                        <li>
                            <h6>Graduated from University of Malaya 👨‍🎓</h6>
                            <p>
                                Alhamdulillah, after 6 years of studies (foundation + bachelors), and now I am a proud graduate of University of Malaya, in Bachelor of Islamic Studies and Information Technology!
                            </p>
                        </li>
                        <li>
                            <h6>Embarking React ⚛</h6>
                            <p>
                                A new development milestone for me. One month before working as research assistant, I crunched myself learning React and React Native. It was crazy and worthwhile at the same time!
                            </p>
                        </li>
                        <li>
                            <h6>Research Assistant 🔬</h6>
                            <p>
                                My first development experience, developing an app Tahqeeq: Quran Authenticator - checking Quran authenticity. Using React Native ⚛.
                            </p>
                        </li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h5>2017</h5>
                    <ul>
                        <li>
                            <h6>Internship @ Aventz Management 📺</h6>
                            <p>
                                Working on motion designs and advertisement strategies, I create videos for ads and billboard. Well, my videos has been in billboards and televisions for football match! How cool is that?
                            </p>
                        </li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h5>2016</h5>
                    <ul>
                        <li>
                            <h6>Founding al-Serembani Studio 📽</h6>
                            <p>
                                Evangelist on graphic and motion design, and produce products for events! I also give talks and workshops.
                            </p>
                        </li>
                        <li>
                            <h6>2 Time Karate Bronze Medalist 🥉</h6>
                            <p>
                                Participated in Majlis Sukan Universiti Malaysia (MASUM) as karate athlete, bring back bronze for University of Malaya.
                            </p>
                        </li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h5>2013</h5>
                    <ul>
                        <li>
                            <h6>Starting Programming Journey 👨‍💻</h6>
                            <p>Taking introductory course for programming, I take a beginning path to my programming journey. For a young blood, I learn C and Python. Kinda missed my lecturer, Mr. Z for his sporting charisma (we are still communicate!).</p>
                        </li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h5>2012</h5>
                    <ul>
                        <li>
                            <h6>Replacement Teacher @ SRI Seremban 👨‍🏫</h6>
                            <p>Taking my time off waiting for transition from Kelantan to Kuala Lumpur, Malaysia, I work as replacement teacher, teaching science for primary school at my hometown.</p>
                        </li>
                        <li>
                            <h6>Buying my first own laptop 💻</h6>
                            <p>Using my hard earned money, I bought my first laptop for learning 😊</p>
                        </li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h5>2011</h5>
                    <ul>
                        <li>
                            <h6>Graduated secondary school! 🎓</h6>
                            <p>A proud SMKA Sheikh Hj Mohd Said student, 5-year study experience that I won&lsquo;t get anywhere!</p>
                        </li>
                    </ul>
                </div>

                <hr />

                <div>
                    <h5>1994</h5>
                    <ul>
                        <li>
                            <h6>Born 👶!</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Banner;