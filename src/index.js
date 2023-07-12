import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  // const style = {
  //   color: 'red',
  //   fontSize: '48px',
  //   textTransform: 'uppercase',
  // };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const len = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {len > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, excepturi error. Impedit dolore esse eligendi
            perspiciatis a pariatur debitis, deleniti quas, odio maxime earum
            labore tenetur sed sit, placeat animi.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => {
              return <Pizza pizzaObj={pizza} />;
            })}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

const Pizza = ({ pizzaObj }) => {
  const soldOut = pizzaObj.soldOut;
  return (
    <div className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt="Pizza spinchi" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{soldOut ? 'Sold out' : pizzaObj.price}</span>
      </div>
    </div>
  );
};
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 15;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to welcome you here between {openHour}:00 and {closeHour}
          :00
        </p>
      )}
    </footer>
  );
};
// React.createElement('footer', null, 'We are currently open');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
