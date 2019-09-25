const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Song = require('../models/song');

router.get('/', (req, res, next) => {
	Song.find((error, songs) => {
		if(error) return res.status(500).json({error: error});
		return res.status(200).json({
			songs: songs
		});
	});
});

router.get('/:songId', (req, res, next)=> {
	Song.findById(req.params.songId, (error, song) => {
		if(error) return res.status(500).json({error: error});
		return res.status(200).json({
			song: song
		});
	});
});

router.post('/', (req, res, next) => {
	const song = new Song({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		body: req.body.body
	});
	song.save((error, result) => {
		if(error) return res.status(500).json({error: error});
		return res.status(200).json({
			message: 'New song created',
			createdSong: song
		})
	});
});

router.put('/:songId', (req, res, next)=>{
	Song.updateOne({_id: req.params.songId}, {$set: {title: req.body.title, body: req.body.body}}, (error, song) => {
		if(error) return res.status(500).json({error: error});
		return res.status(200).json({
			message: 'Song updated',
			updatedSong: song
		});
	});
});

router.delete('/:songId', (req, res, next)=>{
	Song.deleteOne({_id: req.params.songId}, (error, song) => {
		if(error) return res.status(500).json({error: error});
		return res.status(200).json({
			message: 'Song removed',
			removedSong: song
		});
	});
});

module.exports = router;