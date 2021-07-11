import styles from 'styles/Home.module.scss';
import Link from 'next/link';
import { ReactChild } from 'react';
import myTimeline from 'content/timeline.json';
// import { DateTime } from 'luxon';

type TimelineProps = {};

type MyTimelineType = {
    year: number,
    activities: Array<{
        milestone: string,
        description?: string,
    }>,
};

// const myTimeline: MyTimelineType = [
//     {
//         year: 2021,
//         activities: [
//             {
//                 milestone: `System Developer @ Toyyibpay (Aug)`,
//                 description: `Extremely excited to work along with the new generation of Toyyibpay 😉`,
//             },
//         ],
//     },
//     {
//         year: 2020,
//         activities: [
//             {
//                 milestone: `Full Stack Developer @ Qijang Technologies (Sept)`,
//                 description: `An e-commerce plaform, integrating Lazada, Shopee and others for omnichannel shopping experience. I was also head of two projects, in which I hope it will be launched in future.`,
//             },
//             {
//                 milestone: `Developed Jombuat 👨‍👩‍👧‍👦`,
//                 description: <>A listing platform, featuring all developers from Malaysia, Indonesia, Singapore and Brunei. Of course, others are welcome too! Starting as a just-an-impromptu hackaton with <a href="https://fajarsiddiq.com/" target="_blank" rel="noopener noreferrer">Fajar Siddiq</a> during JomLaunch annual event, now it is live for everyone!</>,
//             },
//         ],
//     },
//     {
//         year: 2019,
//         activities: [
//             {
//                 milestone: `Frontend Developer @ SPEZA (Nov)`,
//                 description: `My first company, working on cryptocurrency trading platform. So excited for my first job!`,
//             },
//         ],
//     },
//     {
//         year: 2018,
//         activities: [
//             {
//                 milestone: `Graduated from University of Malaya 👨‍🎓`,
//                 description: `Alhamdulillah, after 6 years of studies (foundation + bachelors), and now I am a proud graduate of University of Malaya, in Bachelor of Islamic Studies and Information Technology!`,
//             },
//             {
//                 milestone: `Embarking React ⚛`,
//                 description: `A new development milestone for me. One month before working as research assistant, I crunched myself learning React and React Native. It was crazy and worthwhile at the same time!`,
//             },
//             {
//                 milestone: `Research Assistant 🔬`,
//                 description: `My first development experience, developing an app Tahqeeq: Quran Authenticator - checking Quran authenticity. Using React Native ⚛.`,
//             },
//         ],
//     },
//     {
//         year: 2017,
//         activities: [
//             {
//                 milestone: `Internship @ Aventz Management 📺`,
//                 description: `Working on motion designs and advertisement strategies, I create videos for ads and billboard. Well, my videos has been in billboards and televisions for football match! How cool is that?`,
//             },
//         ],
//     },
//     {
//         year: 2016,
//         activities: [
//             {
//                 milestone: `Founding al-Serembani Studio 📽`,
//                 description: `Evangelist on graphic and motion design, and produce products for events! I also give talks and workshops.`,
//             },
//             {
//                 milestone: `2 Time Karate Bronze Medalist 🥉`,
//                 description: `Participated in Majlis Sukan Universiti Malaysia (MASUM) as karate athlete, bring back bronze for University of Malaya.`,
//             },
//         ],
//     },
//     {
//         year: 2013,
//         activities: [
//             {
//                 milestone: `Starting Programming Journey 👨‍💻`,
//                 description: `Taking introductory course for programming, I start my path to my programming journey. For a young blood, I learn C and Python. Kinda missed my lecturer, Mr. Z for his sporting charisma (we are still communicating!).`,
//             },
//         ],
//     },
//     {
//         year: 2012,
//         activities: [
//             {
//                 milestone: `Replacement Teacher @ SRI Seremban 👨‍🏫`,
//                 description: `Taking my time off waiting for foundational study transition from Kelantan to Kuala Lumpur, Malaysia, I work as replacement teacher, teaching science for primary school at my hometown.`,
//             },
//             {
//                 milestone: `Buying my first own laptop 💻`,
//                 description: `Using my hard earned money, I bought my first laptop for learning 😊`,
//             },
//         ],
//     },
//     {
//         year: 2011,
//         activities: [
//             {
//                 milestone: `Graduated secondary school! 🎓`,
//                 description: `A proud SMKA Sheikh Hj Mohd Said student, 5-year study experience that I won&lsquo;t get anywhere!`,
//             },
//         ],
//     },
//     {
//         year: 1994,
//         activities: [
//             {
//                 milestone: `Born 👶!`,
//             },
//         ],
//     },
// ];

const Timeline: React.FC<TimelineProps> = ({}) => {
    return (
        <section className={styles.Timeline}>
            <div className={styles.Timeline__sections}>
                <h2>My Timeline</h2>

                {
                    myTimeline.map((timeline: MyTimelineType, timelineIndex) => (
                        <div key={`timeline-${timeline.year}`}>
                            <div>
                                <h5>{timeline.year}</h5>
                                <ul>
                                    {
                                        timeline.activities.map((activity, index) => (
                                            <li key={`activity_${timeline.year}_${index}`}>
                                                <h6>{activity.milestone}</h6>
                                                { activity.description && <p>{activity.description}</p> }
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            { timelineIndex < myTimeline.length - 1 && <hr /> }
                        </div>
                        
                    ))
                }
            </div>
        </section>
    );
};

export default Timeline;