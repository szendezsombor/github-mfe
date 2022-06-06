// Ez azért fontos mert asyncron módon kell futnia a kódnak
// Ha nem import-al futtatnánk akkor a sima es6 importok nem töltődnének be
import('./bootstrap');

// -------------------------------- Bad scenario --------------------------------
// Ha csak ezt csinálnánk...
// import 'products/ProductsIndex';
// console.log('Container');
// Akkor a webpack nem tudná a dependenciákat behúzni és egy ilyennel elszáll:
// Uncaught TypeError: Cannot read properties of undefined (reading 'call')
