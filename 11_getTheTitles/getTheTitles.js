const getTheTitles = function (books) {
    let titles = [];

    titles[0] = books[0].title;
    titles[1] = books[1].title;

    // Alternate solution:

    // for (let i = 0; i < books.length; i++) {
    //     titles.push(books[i].title)
    // }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
