import './App.css';
import Items from './items';
import ScrollTop from './navbar';
import Footer from './footer';
import Chart from './chart';
import { useGlobalContext } from "./context";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { history, total, income, expense, formatCurrency } = useGlobalContext();

  return (
    <div className="app-shell">
      <ScrollTop />
      <main className="page">
        <section className="hero">
          <div className="hero__copy">
            <h1 className="hero__title">Track every dollar, celebrate every saving.</h1>
            <p className="hero__desc">
              A calmer, more visual dashboard with quick-add controls, a live breakdown, and
              tidy history cards to keep spending transparent.
            </p>
            <div className="hero__stats">
              <div className="hero-stat balance">
                <p className="eyebrow">Balance</p>
                <h2>{formatCurrency(total)}</h2>
                <p className="muted">What is left after expenses</p>
              </div>
              <div className="hero-stat income">
                <p className="eyebrow">Income</p>
                <h2>{formatCurrency(income)}</h2>
                <p className="muted">All positive entries</p>
              </div>
              <div className="hero-stat expense">
                <p className="eyebrow">Expense</p>
                <h2>{formatCurrency(expense)}</h2>
                <p className="muted">All negative entries</p>
              </div>
            </div>
          </div>
          <div className="hero__viz">
            {history.length > 0 ? (
              <Chart />
            ) : (
              <div className="chart-placeholder">
                <p className="eyebrow">Visuals activate after your first entry</p>
                <h3>Start with a paycheck or a bill.</h3>
                <p className="muted">
                  Add income as positive values, expenses as negative values.
                </p>
              </div>
            )}
          </div>
        </section>

        <Items />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </div>
  );
}

export default App;
