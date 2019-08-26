let books = [];
let id = 0;

const read = (req, res) => {
    res.status(200).send(books);
}

module.exports = {
    read: read
};