import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';
import './Header.css';
import { TonConnectButton } from '@tonconnect/ui-react';

const Header = () => {

    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть приложение</Button>
            <span>TelegramTrack</span>
            <TonConnectButton className="my-button-class" style={{ float: "right" }}/>
        </div>
    );
};

export default Header;