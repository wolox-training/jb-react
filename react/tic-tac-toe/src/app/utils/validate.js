export const isLogged = () => window.localStorage.getItem('token');
export const isNotLogged = () => !window.localStorage.getItem('token');
