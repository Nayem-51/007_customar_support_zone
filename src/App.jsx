import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCards';

const App = () => {
  const [tickets, setTickets] = React.useState([]);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        const response = await fetch('/Tickets.json');
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Error loading tickets:', error);
      }
    };

    loadTickets();
  }, []);

  const handleAddToProgress = (ticket) => {
    console.log('Add to progress:', ticket);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-20 px-6">
        <Banner />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mt-6">
          <div className="lg:col-span-2">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onAddToProgress={handleAddToProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;