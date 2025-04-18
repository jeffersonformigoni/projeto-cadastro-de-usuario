import React from 'react';
import { Routes, Route } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

export default props => 
    <Routes>
        <Route exct path='/' element  ={<Home />} />
        <Route path='/users' element  ={<UserCrud />} />
        <Route path='*'      element  ={<Home />} />
    </Routes>

