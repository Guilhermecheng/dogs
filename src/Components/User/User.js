import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';

import NotFound from '../NotFound';

import { UserContext } from '../../UserContext';
import Head from '../Helper/Head';

const User = () => {
    const { data } = useContext(UserContext);

    return (
        <section className="container">
            <Head title="Minha conta" />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
                <Route path="*" element={<NotFound />} />
            </Routes>


        </section>
    )
}

export default User;
