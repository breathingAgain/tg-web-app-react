import React, { useCallback, useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [url, setUrl] = useState('');
    const {tg} = useTelegram();

    const onSendData = useCallback( () => {
        const data = {
            url
        }
        tg.sendData(JSON.stringify(data));
    }, [url, tg])

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
        if (!url){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [url, tg])

    return (
        <div>
            <form>
            <div>
                <label>Ссылка на канал</label>
                <input 
                    type="text" 
                    value={url}
                    onChange={onChangeUrl}
                />
            </div>
           
            </form>
        </div>
    );
};

export default Form;