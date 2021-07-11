import styles from 'styles/About.module.scss';

// Importing dependencies
import Image from 'next/image';

type StackProps = {};

const description = `
    Assalamualaikum and hello! I am Atif Aiman, a Malaysian-born, originated from Seremban, Negeri Sembilan.
    As my mission is simple, is to be the best as I can be, I am pursuing different kind of things.
    I am actually get caught bored easily with everything, but there are things that I love to do.
    Design, code, game, and sing (but with a really bad voice though 😅), I want to dig how far
    can I improve myself and others around me. And yes, I do love to inspire people to be great
    as well, so if you have any question, whether it is about coding, or other kind of awesome thing,
    just hit me in my DM on social media!
`;


const Stack: React.FC<StackProps> = () => {
    return (
        <section className={styles.Stack}>
            <div className={styles.Stack__container}>
                <h1>Who am I?</h1>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default Stack;