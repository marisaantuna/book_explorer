import './Home.css';
import SuccessView from './SuccessView';

export default function Home() {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Book Explorer</h1>
                <p>Discover your next favorite book!</p>
            </header>
            <main className="home-main">
                <section className="home-featured">
                    <h2>Featured Books</h2>
                    {/* Add featured books here */}
                </section>
                <section className="home-categories">
                    <h2>Categories</h2>
                    {/* Add book categories here */}
                </section>
            </main>
            <footer>
                <SuccessView userId='1234'/>
            </footer>
        </div>
    );
};