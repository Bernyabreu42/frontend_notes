import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ShowLoginOrRegister from '../components/ShowLoginOrRegister';
import { AuthProvider } from '../context/useContext';

export default function index() {




  return (
    <AuthProvider>
      <Layout>

        {
          <ShowLoginOrRegister />
        }

      </Layout>
    </AuthProvider>

  );
}


