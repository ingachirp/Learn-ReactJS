import './App.css';
import Navigation from './components/Navigation';
import logo from './logo.svg';
import Cards from './components/Cards';


export default function App() {
  return (
    <div className='app'>
      <header className='header'>
        <img src={logo} className='header__logo' alt='logo' />
        <Navigation navType='primary' showTitle={false} />
        <div className='header__hero'>
          Header image
        </div>
      </header>
      <main>
      <Cards ></Cards>
        <div className="content">
          <article className='content__article'>
            <section>
              <h2 className='content__title'>Services</h2>
              <p className='content__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl vel velit convallis accumsan ut sit amet est. Nullam sit amet fermentum magna. Duis finibus congue quam nec rhoncus. Ut id dignissim orci.</p>
            </section>
            <section>
              <h3 className='content__sub-header'>Sub Header</h3>
              <p className='content__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl vel velit convallis accumsan ut sit amet est. Nullam sit amet fermentum magna. Duis finibus congue quam nec rhoncus. Ut id dignissim orci.</p>
            </section>
          </article>
          <Navigation navType='secondary' showTitle={true} />
        </div>
      </main>
    </div>
  );
}

