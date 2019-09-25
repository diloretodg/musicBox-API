const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Returning all songs'
    });
});

router.get('/:songsId', (req, res, next)=>{
    res.status(200).json({
        message: 'Return song with ID: ' + req.params.songId
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Added song'
    });
});

router.put('/:songId', (req, res, next)=>{
    res.status(200).json({
        message: 'Updated song with ID: ' + req.params.songId
    });
});

router.delete('/:songId', (req, res, next)=>{
    res.status(200).json({
        message: 'Deleted song with ID: ' + req.params.songId
    });
});

module.exports = router;