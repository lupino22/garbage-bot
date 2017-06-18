// DB
const mongoose = require('mongoose');
const db = mongoose.createConnection('localhost', 'erp');
// SCHEMA
const schema = mongoose.Schema({ q: { type: String }, a: { type: String } });
// MODEL
const Base = db.model('Base', schema);
const Contra = db.model('Contract', schema);
const Crm = db.model('Crm', schema);
const Finance = db.model('Finance', schema);
const Hrm = db.model('Hrm', schema);
const Scm = db.model('Scm', schema);

const Vocubulary = db.model('Vocubulary', mongoose.Schema({ word: { type: String } }));

new Vocubulary({ word: 'text' }).save(function(err) {});

module.exports = {
    Base: Base,
    Contra: Contra,
    Crm: Crm,
    Finance: Finance,
    Hrm: Hrm,
    Scm: Scm,
    removeAll: function() {
        Base.remove({}, function(err) {})
        Contra.remove({}, function(err) {})
        Crm.remove({}, function(err) {})
        Finance.remove({}, function(err) {})
        Hrm.remove({}, function(err) {})
        Scm.remove({}, function(err) {})
    }
}
