import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IAboutPageProps {}

const Contacts: React.FunctionComponent<IAboutPageProps> = (props) => {
    const [message, setMessage] = useState('');
    const { number } = useParams();

    useEffect(() => {
      if(number){
        setMessage(`The number is as follows: ${number}`)
      } else{
        setMessage("No parameter provided")
      }
    }, [])
    

    return (
        <div>
            <p>This is the about page.</p>
            <p>{message}</p>
        </div>
    );
};

export default Contacts;