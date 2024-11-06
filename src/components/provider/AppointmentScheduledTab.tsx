const AppointmentScheduledTab = () => {
  const appointments = [
    {
      id: '1',
      patientName: 'Pranjal Borkar',
      date: '2024-09-11',
      time: '11:00 AM',
      location: 'Main Clinic - Room 204',
      type: 'Follow-up Consultation',
      status: 'upcoming',
    },
  ];

  return (
    <div className="appointments-container">
      <div className="appointments-card">
        <div className="appointments-header">
          <h2 className="appointments-title">Scheduled Appointments</h2>
          <p className="appointments-subtitle">
            Overview of upcoming and recent appointments
          </p>
        </div>

        <div className="appointments-list">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-item">
              <div className="appointment-item-header">
                <h3 className="appointment-type">{appointment.type}</h3>
                <span className={`status-badge status-${appointment.status}`}>
                  {appointment.status.charAt(0).toUpperCase() +
                    appointment.status.slice(1)}
                </span>
              </div>

              <div className="appointment-details">
                <div className="detail-row">
                  <div className="detail-label">
                    <svg
                      className="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>{appointment.patientName}</span>
                  </div>

                  <div className="detail-label">
                    <svg
                      className="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>
                      {new Date(appointment.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-label">
                    <svg
                      className="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{appointment.time}</span>
                  </div>

                  <div className="detail-label">
                    <svg
                      className="icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{appointment.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentScheduledTab;
