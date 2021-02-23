import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/arthurdb1999.png" alt="Arthur" />
            <div>
                <strong>Arthur de Bortoli</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                    </p>
            </div>
        </div>
    )
}