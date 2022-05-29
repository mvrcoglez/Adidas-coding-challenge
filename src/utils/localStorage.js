export const setItem = (key, value) => {
    window ? window.localStorage.setItem(key, value) : null; 
};

export const getItem = (key) => {
    console.log(window);
    return JSON.parse(window ? window.localStorage.getItem(key) : null); 
};

export const removeItem = (key) => {
    window ? window.localStorage.removeItem(key): null;
}