import Footer from './Footer';
import Header from './Header'

export default function Layout({ children }) {

  return (
    <div className='page'>
      <Header />
      <main className='main'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
