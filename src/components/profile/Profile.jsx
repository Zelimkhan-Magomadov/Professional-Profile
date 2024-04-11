import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.profileContainer }>
            <img className={styles.profileImage } src="https://avatars.githubusercontent.com/u/50365178" alt=""/>
            <p className={styles.profileName }>Zelimkhan Magomadov</p>
            <p className={styles.profileJob }>Android developer</p>
        </div>
    );
};

export default Profile;