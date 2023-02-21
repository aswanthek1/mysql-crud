import { db } from "../config/db.js";

///get books
export const getBooks = async (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};


//add books
export const addBooks = async (req, res) => {
  try {
    console.log(req.body);
    const q =
      "INSERT INTO books (`title`, `description`, `cover`, `prize`) VALUES (?) ";
    const values = [
      req.body.title,
      req.body.description,
      req.body.cover,
      req.body.prize,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("data has created successfully");
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBooks = async (req, res) => {
  try {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";
    db.query(q, [bookId], (err, data) => {
      if (err) return res.json(err);
      return res.json("book deleted successfullly");
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateBook = async (req, res) => {
  try {
    let bookid = req.params.id;
    console.log(req.body, bookid);
    const values = [
      req.body.title,
      req.body.description,
      req.body.cover,
      req.body.prize,
    ];
    const q =
      "UPDATE books SET `title` = ?, `description` = ?, `cover` = ?, `prize` = ? WHERE id = ?";

    db.query(q, [...values, bookid], (err, data) => {
      if (err) return res.json(err);
      return res.json("updated successfully");
    });
  } catch (error) {
    console.log(error);
  }
};
