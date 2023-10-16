const {Router} = require('express')
const bookController = require('../controller/bookController')
const {authorizationMiddlewareAll} = require('../middleware/authorizationMiddleware')

const router = Router();

//HTTP Method

//Post Book
router.post('/', authorizationMiddlewareAll, bookController.createBook)

//Get Book
router.get('/', authorizationMiddlewareAll, bookController.getAllBook)

//Put Book
router.put('/:id', authorizationMiddlewareAll, bookController.updateBook)

//Delete Book
router.delete('/:id', authorizationMiddlewareAll, bookController.deleteBook)

module.exports = router;