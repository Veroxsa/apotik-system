import React, { useState } from "react";

const ParkingSystem = () => {
  const [availableSlots, setAvailableSlots] = useState(10);
  const [ticketData, setTicketData] = useState({});
  const [currentTicket, setCurrentTicket] = useState(null);
  const [ticketInput, setTicketInput] = useState("");

  const detectVehicle = () => {
    return true; // Simulasi kendaraan terdeteksi
  };

  const issueTicket = () => {
    if (availableSlots > 0) {
      const ticketId = Object.keys(ticketData).length + 1;
      setTicketData({ ...ticketData, [ticketId]: false });
      setAvailableSlots(availableSlots - 1);
      setCurrentTicket(ticketId);
      alert(`Tiket diberikan: ${ticketId}`);
    } else {
      alert("Parkir penuh!");
    }
  };

  const payTicket = (ticketId) => {
    if (ticketData[ticketId] !== undefined) {
      setTicketData({ ...ticketData, [ticketId]: true });
      alert(`Tiket ${ticketId} telah dibayar.`);
    } else {
      alert("Tiket tidak valid!");
    }
  };

  const verifyPayment = (ticketId) => {
    return ticketData[ticketId] || false;
  };

  const handleExit = () => {
    const ticketId = parseInt(ticketInput);
    if (verifyPayment(ticketId)) {
      setAvailableSlots(availableSlots + 1);
      alert("Gerbang keluar terbuka. Terima kasih telah menggunakan layanan parkir!");
      setTicketInput("");
    } else {
      alert("Pembayaran tidak valid! Harap selesaikan pembayaran.");
    }
  };

  return (
    <div>
      <h2>Status Slot Parkir: {availableSlots}</h2>
      <button onClick={() => detectVehicle() && issueTicket()}>
        Deteksi Kendaraan & Berikan Tiket
      </button>
      {currentTicket && (
        <div>
          <p>Kendaraan diparkir dengan tiket: {currentTicket}</p>
        </div>
      )}

      <hr />
      <h3>Keluar Parkir</h3>
      <input
        type="text"
        placeholder="Masukkan ID Tiket"
        value={ticketInput}
        onChange={(e) => setTicketInput(e.target.value)}
      />
      <button onClick={() => payTicket(ticketInput)}>Bayar Tiket</button>
      <button onClick={handleExit}>Verifikasi & Keluar</button>
    </div>
  );
};

export default ParkingSystem;
