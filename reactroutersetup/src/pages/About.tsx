import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {

    return (
        <div>
            <p>This is the about page.</p>
        </div>
    );
};

export default AboutPage;