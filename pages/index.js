import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Note from '../components/Note';
import { AuthProvider } from '../context/useContext';

export default function index() {

  const token = false
  const [login, setLogin] = useState(true)
  const [note, setNote] = useState(true)

  const ShowLoginOrLogout = () => {
    return login
      ? <Login set={setLogin} />
      : <Logout set={setLogin} />
  }

  const ShowNoteOrEmpty = () => {
    return note
      ? <Note />
      : <h2>No hay notas</h2>
  }

  return (
    <AuthProvider>
      <Layout>

        {
          token ? <ShowLoginOrLogout /> : <ShowNoteOrEmpty />
        }

      </Layout>
    </AuthProvider>

  );
}


