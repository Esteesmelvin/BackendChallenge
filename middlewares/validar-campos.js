const express = require('express')
const {validationResult} = require ('express-validator');

const validarCampos = (req, res = express.response, next) => {
    const erros = validationResult ( req );
    if(!erros.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors: errors.mapped()
        })
    }
    next();
}

module.exports = {validarCampos}