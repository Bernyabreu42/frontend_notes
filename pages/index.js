import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ShowLoginOrRegister from '../components/ShowLoginOrRegister';
import AuthContext from '../context/useContext';
import Home from './home'
export default function index() {

  const { validated } = useContext(AuthContext)

  return (
    <Layout>

      {
        validated
          ? <Home />
          : <ShowLoginOrRegister />
      }

    </Layout>

  );


}


