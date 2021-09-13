const express = require('express')
const router = express.Router()
const checklistsRoutes = require('./checklists.routes')
const modulesRoutes = require('./modules.routes')
const socialNetworksRoutes = require('./socialnetworks.routes')
const statusesRoutes = require('./statuses.routes')
const tasksRoutes = require('./tasks.routes')
const themesRoutes = require('./themes.routes')
const themesChecklistsRoutes = require('./themeschecklists.routes')
const usersRoutes = require('./users.routes')
const usersModulesRoutes = require('./usersModules.routes')
const userTasksRoutes = require('./userTasks.routes')

//++
router.use('/users', usersRoutes )
//++
router.use('/checklists', checklistsRoutes )
//++
router.use('/modules', modulesRoutes )
//++
router.use('/socialNetworks', socialNetworksRoutes )
//++
router.use('/statuses', statusesRoutes )
//++
router.use('/tasks', tasksRoutes )
//~~
router.use('/themes', themesRoutes )
//--
router.use('/themesChecklists', themesChecklistsRoutes )
//++
router.use('/usersModules', usersModulesRoutes )
//++
router.use('/userTasks', userTasksRoutes )

module.exports = router;