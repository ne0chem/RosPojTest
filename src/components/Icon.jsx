import React from 'react';
export default function Icon({name}) {
 const paths={phone:<path d="M22 17v3a2 2 0 0 1-2 2C10 21 3 14 2 4a2 2 0 0 1 2-2h3l2 6-3 2c2 4 4 6 8 8l2-3Z"/>,mail:<><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 6 9 7 9-7"/></>,clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,pin:<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>};
 return <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
