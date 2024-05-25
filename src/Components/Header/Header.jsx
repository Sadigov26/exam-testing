import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <div>
            <header>
                <div className={styles.containerHeader}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/bascet">bascet</a></li>
                        <li><a href="/wishlist">wishlist</a></li>
                        <li><a href="/dahsboard">dahsboard</a></li>
                    </ul>
                </div>
            </header>

        </div>
    )
}

export default Header