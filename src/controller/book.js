import mongoose from "mongoose";
import { Router } from "express";
import Book from "../models/book";
import bodyParser from "body-parser";


    let api = Router();

api.post('/add', (req, res) => {
    const newBook = new book(req.body);
    newBook.save((err, book) => {
        if(err){
            res.send(err);
        }
        res.json({ message: 'book saved'});
    });
});
api.get('/', (req, res) => {
    Book.find({}, (err, books) => {
        if(err){
            res.send(err);
        }
        res.json(books);
    });
});

api.get('/:id', (req, res) => {
    Book.find({_id : req.params.id}, (err, book) => {
      if (err) {
        res.send(err);
      }
      res.json(book);
    });
  });

  // Put
  api.post('/:id', (req, res) => {
    Book.findOneAndUpdate({_id : req.params.id}, req.body, (err, book) => {
      if (err) {
        res.send(err);
      }
      res.json(book)
    })
  });

  // Delete
  api.delete('/:id', (req, res) => {
    Book.remove({_id : req.params.id}, (err, book) => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Supprimé avec succès'});
    });
  });

export default api;