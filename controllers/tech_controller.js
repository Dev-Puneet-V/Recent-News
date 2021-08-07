const fetch = require('node-fetch');

module.exports.news = async function (req, res) {
    try {
        var data = [{}];
        const api_url = ['https://newsapi.org/v2/everything?q=bitcoin&apiKey=7f5a13de53f04f0abb812cd53ed60f50',
                        'https://newsapi.org/v2/everything?q=apple&apiKey=7f5a13de53f04f0abb812cd53ed60f50',
                        'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=7f5a13de53f04f0abb812cd53ed60f50'
                        ];
        for(let i = 0; i < api_url.length; i++){
            const fetch_response = await fetch(api_url[i]).then(response => response.json())
            .then(json => {
                console.log(json);
                data = data.concat(json);
            });
        }
        const fetch_response = await fetch(api_url[0]).then(response => response.json())
            .then(json => {
                console.log(json);
                data = json;
            });
        return res.render('home', { title: "NEWS", data: data, type : "tech" });

    } catch (err) {
        return res.render('home', { title: "NEWS", data: err, type : "tech" });
    }
}