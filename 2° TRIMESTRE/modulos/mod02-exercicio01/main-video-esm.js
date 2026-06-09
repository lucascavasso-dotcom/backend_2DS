// APENAS IMPORTA MÓDULOS DE 
// OUTROS ARQUIVOS (import)
import {alugarFilmes, devolverFilme} from "./video-esm.js"

console.log(alugarFilmes('Inception', '03/06/2026', '14.90'))
console.log(devolverFilme('Inception', '06/06/2026'))
