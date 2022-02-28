const skills = [
  {text: 'JavaScript', expert: false, _id: 1},
  {text: 'CSS', expert: true, _id: 2},
  {text: 'HTML5', expert: false, _id: 3},
  {text: 'Node.JS', expert: false, _id: 4}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ("No skill was found")
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  // Add the id
  skill._id = Date.now() % 1000000
  // New todos wouldn't be done
  skills.push(skill)
  return callback(null, skill)
}

function findByIdAndDelete(id,callback){
  try {
    const idx = skills.findIndex(skill => skill.id == parseInt(id))
    const deletedSkill = skills.splice(idx,1)
    if(!deletedSkill.length) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

function findByIdAndUpdate(id, update, callback){
  try{
    const idx = skills.findIndex(skill => skill.id == parseInt(id))
    const updatedSkill = skills.splice(idx,1,update)
    update._id = Date.now() % 1000000
    return callback(null, updatedSkill[0])
  }catch(error) {
    return callback(error,null)
  }
}

function enumerateSkills(){
  skills.forEach(skill => console.log(skill))
}

export { 
  find,
  findById,
  create,
  findByIdAndDelete,
  findByIdAndUpdate,
  enumerateSkills
}