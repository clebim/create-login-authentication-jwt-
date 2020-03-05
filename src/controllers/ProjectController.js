module.exports = {
    Store(req, res){
        res.send({ ok: true, user: req.userId});
    }
}