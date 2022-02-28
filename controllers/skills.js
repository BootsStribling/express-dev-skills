import * as skillsDb from '../data/skills-db.js'

function index(req, res) {
  skillsDb.find({}, function (error, skills){
    res.render('skills/index', {
      skills: skills,
      error: error,
      time: req.time,
    })
  })
}

function show(req, res) {
  console.log('show fired')
  console.log(req.params)
  skillsDb.findById(req.params.id, function (error, skill){
    res.render('skills/show', {
      skill: skill,
      error: error,
    })
  })
}

function newSkill(req, res){
  res.render('skills/new')
}

function create(req, res) {
  skillsDb.create(req.body, function(error, skill) {
		// Notice we are doing a redirect here!
    res.redirect('/skills')
  })
}

function deleteSkill(req,res){
  skillsDb.findByIdAndDelete(req.params.id, function (error, skill){
    res.redirect('/skills')
  })
}

function showEdit(req, res) {
  console.log('edit fired')
  skillsDb.findById(req.params.id, function (error, skill){
    res.render('skills/edit', {
      skill: skill,
      error: error
    })
  })
}

function update(req,res){
  console.log('patch fired')
  skillsDb.enumerateSkills()
  console.log(req.body)
  skillsDb.findByIdAndUpdate(req.params.id, req.body, function(error, skill){
    console.log(skillsDb)
    res.redirect('/skills')
  })
}

export {
  index,
  show,
  newSkill as new,
  create,
  deleteSkill as delete,
  showEdit as edit,
  update,
}