
import Footer from './Footer';
import Header from './Header'

export default function Layout({ children }) {

  return (
    <div className='page'>
      <Header />
      <main className='main'>
        <section>
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
}
