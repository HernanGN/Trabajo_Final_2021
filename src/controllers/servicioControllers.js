const databaseConnection=require('../../config/database');

const prog=require('../../programas.json');

const renderIndex = (req,res)=>{
    res.render('pages/index');
    };

const renderProgramas = (req,res)=>{
    res.render('pages/programas', {dataProgramas:prog});        
    };
        
const renderPreguntas= (req,res)=>{
    res.render('pages/preguntas');
    }

const renderPrestadores= (req,res)=>{
    databaseConnection.query('SELECT * FROM prestadores',(error,pres)=>{
        if(error){
            console.log(error)
        }else{        
            res.render('pages/prestadores', {dataPrestadores:pres});
        }
    })
};   

module.exports= {
    renderIndex,
    renderProgramas,
    renderPreguntas,
    renderPrestadores
    };