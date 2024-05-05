import React, { useEffect, useState } from 'react';
import './Form.css';
import { useTelegram } from '../../hooks/useTelegram';

const Form = () => {
    const [url, setUrl] = useState('');
    const {tg} = useTelegram();

    const onChangeUrl = (e) => {
        setUrl(e.target.value);
    }

    useEffect( () => {
        tg.MainButton.setParams( {
            text: 'Отправить'
        })
    }, [])

    useEffect( () => {
        if (!url){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [url])

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