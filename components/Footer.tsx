import styles from 'styles/Footer.module.scss';

const Layout: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Pixels built by Atif Aiman
            </a>
        </footer>
    )
}

export default Layout;