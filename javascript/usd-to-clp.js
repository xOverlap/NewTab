const request = require("request")
const cheerio = require("cheerio")
const url = "https://www.google.com/finance/quote/USD-CLP"
request(url, (error, response, html)=> {
    if (!error & & response.statusCode == 200) {
        const $=cheerio.load(html)
        const price= $(".rPF6Lc")
        price.each((i, el)= > {
            const value= $(el).find(".YMlKec").text()
            console.log(value)
        })
    }
});
document.getElementById("converter").innerHTML = "&nbsp;$" + Math.round(value)
function display() {
    document.getElementById("usd-clp").style.display = "flex"
}
setTimeout(display, 2000)

























