const list = [
                {
                    title : "CURRENT AFFAIRS",
                    about : "In this section we provide current affairs which will be useful in Indian Government Examinations",
                    key_name : "Proceed"
                },
                {
                    title : "STORIES",
                    about : "In this section not only we provide Unlimited number of STORIES but also anyone can denote their own stories",
                    key_name : "Proceed"
                },
                {
                    title : "POEMS",
                    about : "In this section not only we provide Unlimited number of POEMS but also anyone can denote their own Poems",
                    key_name : "Proceed"
                },
                {
                    title : "BLOGS",
                    about : "BLOGS are the great way of learning about new things. In this section  we provide a wide category of blogs. Where you not only can read blogs but also contribute yyour own blogs",
                    key_name : "Proceed"
                },
            ];

module.exports.choices = function(req, res){
    return res.render('other',{
        title: "Other Choices",
        choices: list
    });
}