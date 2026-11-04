"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saudacao(nome, pronome = "Sr") {
    console.log(`${pronome}. ${nome}`);
}
saudacao("", "Sra");
