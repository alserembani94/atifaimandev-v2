import styles from 'styles/Header.module.scss';
import Link from 'next/link';
import routes from 'routes/routes.json';
import { useState } from 'react';

const Header = () => {
    const [colorMode, setColorMode] = useState<'dark'|'light'>('light');

    const handleColorMode = () => {
        // return null;
        setColorMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
    }

    return (
        <header className={styles.Header}>
            <nav>
                <ul>
                    <li>
                        <Link href={routes.Home}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={routes.AboutMe}>
                            <a>About Me</a>
                        </Link>
                    </li>
                    {/* <li>
                        <button className={styles.Header__eye} data-mode={colorMode} onClick={handleColorMode} aria-label="Logo wheel" />
                    </li> */}
                    {/* <li>
                        <Link href={routes.Blogs}>
                            <a>Blogs</a>
                        </Link>
                    </li> */}
                    <li>
                        <Link href={routes.Home}>
                            <a>Resume</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;