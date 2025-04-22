import React, { useState } from 'react';
const initialAppointments = [
{ id: 1, name: 'Justin', reason: 'Routine Checkup', date: '2024-08-05', status: 'Scheduled' },
{ id: 2, name: 'John Smith', reason: 'Consultation', date: '2024-08-06', status: 'Scheduled' },
{ id: 3, name: 'Beyonce', reason: 'Follow-up', date: '2024-08-07', status: 'Scheduled' },
];
function Appointments() {
const [appointments, setAppointments] = useState(initialAppointments);
const [completedCount, setCompletedCount] = useState(0);
const markCompleted = (id) => {
const updatedAppointments = appointments.map((appointment) =>
appointment.id === id ? { ...appointment, status: "completed" } : appointment
);
};
setAppointments(updatedAppointments);
setCompletedCount(updatedAppointments.filter(a => a.status === "completed").length);
const style = {
header: {
fontSize: '28px',
Unit 3
AUG-
DEC
2024
fontWeight: 'bold'},
container: { margin:"10px", fontSize: '18px', padding: "10px"},
appointment: { margin: "12px", padding: "3px", border: "1px solid #ccc"},
button: {
backgroundColor: '#4CAF50',
color: 'white',
border: 'none',
padding: '10px 20px',
textAlign: 'left',
textDecoration: 'none',
display: 'inline-block',
fontSize: '20px',
margin: '10px 2px',
cursor: 'pointer',
borderRadius: '5px'
},
completedText: {textDecoration: "line-through", color: "#888" },
p:{
fontSize:'20px',
fontWeight: 'bold'
}
};
return (
<div style={style.container}>
<div style={style.header}>Patient Appointments</div>
{appointments.map((appointment) => (
<div key={appointment.id} style={style.appointment}>
<h3 style={appointment.status === "completed" ? style.completedText :
{}}>{appointment.name}</h3>
<p>{appointment.reason}</p>
<p>{appointment.date}</p>
<p>Status: {appointment.status}</p>
{appointment.status === "Scheduled" && (
<button
style={style.button}
onClick={() => markCompleted(appointment.id)}
>
Mark as Completed
</button>
)}
</div>
))}
<div style={style.p}>Total Completed Appointments: {completedCount}</div>
</div>
);
}
export default Appointments;

