import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [url_tg, setUrl] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback( () => {
        const data = {
            url_tg
        }
        tg.sendData(JSON.stringify(data));
    }, [url_tg, tg])

    useEffect( () => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])

    const onChangeUrl = (e) => {
        setUrl(e.target.value);
    }

    useEffect( () => {
        tg.MainButton.setParams( {
            text: 'Отправить'
        })
    }, [tg])

    useEffect( () => {
        if (!url_tg){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [url_tg, tg])

    return (
        <div>
            <form>
            <div>
                <label>Ссылка на канал</label>
                <input 
                    type="text" 
                    value={url_tg}
                    onChange={onChangeUrl}
                />
            </div>
           
            </form>
        </div>
    );
};

export default Form;