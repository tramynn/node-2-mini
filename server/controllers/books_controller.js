let books = [];
let id = 0;

const read = (req, res) => {
    res.status(200).send(books);
}

const create = (req, res) => {
    const { title, author } = req.body;
    let book = {
        id: id,
        title: title,
        author: author
    }
    books.push(book);
    id++;
    res.status(200).send(books);
}

module.exports = {
    read: read,
    create: create
};