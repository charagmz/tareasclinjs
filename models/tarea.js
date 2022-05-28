const { v4: uuidv4 } = require('uuid');

class Tarea {

    id = '';
    desc = '';
    completadoEn = null;
    
    constructor( desc ) {
        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;
    }

}

module.exports = Tarea;
//se exporta por defecto la tarea
//si se le colocaran llaves se tendria que hacer la desestructuracion al momento de importar
