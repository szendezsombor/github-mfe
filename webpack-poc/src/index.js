import value from './a';
import {alma} from "./b";

export function helloWorld() {
    return "Hello world!" + value + alma;
}

console.log(helloWorld());
