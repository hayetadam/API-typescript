import {Todo} from './todo';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const todo = new Todo();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {
    extended:true
}));


/*
On utilise un Router pr regrouper ttes les routes d'un type particulier, ici,
notre router regroupera les routes liées au Todo's 
*/
const router = express.Router(); //on fait un router ac des méthodes et des chemins

//Route permettant de récupérer les todo
router.get('/' , (req, res) => {
    res.json(todo.lister());
});

//Route permettant d'ajouter un todo
router.post('/' , (req, res) => { //ajoute ce qui a été récup par le post dans le body
    let nouveau = req.body.nouveau;
    todo.ajouter(nouveau);
    res.end('todo ajouté');
});


//Route permettant de supprimer un todo
router.delete('/:suppr' , (req, res) => {
    let suppr = req.params.suppr;
    todo.supperimer(suppr);
    res.end('todo supprimé');
});

app.use('/todo', router);

app.listen(3000);


