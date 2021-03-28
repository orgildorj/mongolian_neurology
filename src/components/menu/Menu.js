import React from 'react'
import styles from "./Menu.module.css"

function Menu() {
    return (
        <div className={styles.menuContainer}>
            <ul className={styles.menuList}>
                <li>Нүүр</li>
                <li>Бидний тухай</li>
                <li>Мэдээ</li>
                <li>Холбоо барих</li>
            </ul>
            <div className={styles.enMenu}>
                English
            </div>
        </div>
    )
}

export default Menu
