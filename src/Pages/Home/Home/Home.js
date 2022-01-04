import React from 'react';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors.js';

import Hospitaldepartment from '../HospitalDepartments/Hospitaldepartment';
import Review from '../Review/Review';
import Services from '../services/services';
import Specialist from '../Specialist/Specialist';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Specialist></Specialist>
            <Hospitaldepartment></Hospitaldepartment>
            <Review></Review>
           
        </div>
    );
};

export default Home;