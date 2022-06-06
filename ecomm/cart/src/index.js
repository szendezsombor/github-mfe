// Asyncron dependenciák betöltése miatt kell ez az index.js -> bootstrap.js
// Ha nem így hasznánánk, az import { something } from 'any'; nem tudna megfutni időben
// Ki kell hogy helyezzük egy asyncron contextbe és ebben segít az import('./bootstrap');
import('./bootstrap');
