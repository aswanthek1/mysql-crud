import express from 'express'
const router = express.Router()
import {db} from '../config/db.js'
import { getBooks, addBooks, deleteBooks, updateBook } from '../controllers/userController.js';

router.get('/',getBooks)

router.post("/books",addBooks);


router.delete("/books/:id", deleteBooks );


  router.put('/books/:id',updateBook)




export default router