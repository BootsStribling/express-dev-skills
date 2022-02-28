import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"
const router = Router()

//GET - localhost:3000/skills
router.get('/', skillsCtrl.index)
//GET - localhost:3000/skills/new
router.get('/new', skillsCtrl.new)
//GET - localhost:3000/skills
router.get('/:id', skillsCtrl.show)
//GET - localhost:3000/skill/:id/edit
router.get('/:id/edit', skillsCtrl.edit)

//CREATE - localhost:3000/create
router.post('/', skillsCtrl.create)

//PATCH - localhost:3000/patch
router.patch('/:id', skillsCtrl.update)


//DELETE - localhost:3000/skills/:id
router.delete("/:id", skillsCtrl.delete)


export {
  router
}