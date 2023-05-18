function upper (str) {
    return str.toUpperCase();
}
function lower (str) {
    return str.toLowerCase();
}

function createLink(filename) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}
function createReturn(){
    return '<a href=/>Voltar</a><br>\n';
}
export default {upper,lower,createLink,createReturn}