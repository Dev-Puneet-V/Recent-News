const fetch = require('node-fetch');
module.exports.india = async function (req, res) {
    try {
        var data;
        const api_url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=7f5a13de53f04f0abb812cd53ed60f50';
        const fetch_response = await fetch(api_url).then(response => response.json())
            .then(json => {
                console.log(json);
                data = json;
            });
        return res.render('home', { title: "NEWS", data: data, type : "country" });

    } catch (err) {
        return res.render('home', { title: "NEWS", data: err, type : "error" });
    }
}
module.exports.usa = async function (req, res) {
    try {
        var data;
        const api_url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7f5a13de53f04f0abb812cd53ed60f50';
        const fetch_response = await fetch(api_url).then(response => response.json())
            .then(json => {
                console.log(json);
                data = json;
            });
        return res.render('home', { title: "NEWS", data: data, type : "country" });

    } catch (err) {
        return res.render('home', { title: "NEWS", data: err, type : "error" });
    }
}

module.exports.germany = async function (req, res) {
    try {
        const api_url = 'https://newsapi.org/v2/top-headlines?country=de&language=en&apiKey=7f5a13de53f04f0abb812cd53ed60f50';
        const fetch_response = await fetch(api_url).then(response => response.json())
            .then(json => {
                console.log(json);
                data = json;
            });
        return res.render('home', { title: "NEWS", data: data, type : "country" });

    } catch (err) {
        return res.render('home', { title: "NEWS", data: err, type : "error" });
    }
}
module.exports.uk = async function (req, res) {
    try {
        const api_url = 'https://newsapi.org/v2/top-headlines?country=gb&language=en&apiKey=7f5a13de53f04f0abb812cd53ed60f50';
        const fetch_response = await fetch(api_url).then(response => response.json())
            .then(json => {
                console.log(json);
                data = json;
            });
        return res.render('home', { title: "NEWS", data: data, type : "country" });

    } catch (err) {
        return res.render('home', { title: "NEWS", data: err, type : "error" });
    }
}

