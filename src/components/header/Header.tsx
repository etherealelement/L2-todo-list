import { FC } from 'react';
import {HeaderProps} from "./Header.props.ts";
import styles from "./Header.module.css";

export const Header: FC<HeaderProps> = ({children}: HeaderProps): JSX.Element => {
    return <div className={styles.header__box}>
        <header className={styles.header}>{children}</header>
    </div>;
};