import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';
import EditEventPage from './pages/EditEventPage';

function App() {
  return (
    <Router>
      <EventProvider>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateEventPage />} />
            <Route path="/edit/:id" element={<EditEventPage />} />
          </Routes>
        </div>
      </EventProvider>
    </Router>
  );
}

export default App;
