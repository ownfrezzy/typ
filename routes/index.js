const express = require('express')
const router = express.Router()
const checklistsRoutes = require('./checklistsRoutes')
const modulesRoutes = require('./modulesRoutes')
const socialNetworksRoutes = require('./socialnetworksRoutes')
const statusesRoutes = require('./statusesRoutes')
const tasksRoutes = require('./tasksRoutes')
const themesRoutes = require('./themesRoutes')
const themesChecklistsRoutes = require('./themeschecklistsRoutes')
const usersRoutes = require('./usersRoutes')
const usersModulesRoutes = require('./usersModulesRoutes')
const userTasksRoutes = require('./userTasksRoutes')

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
//++
router.use('/themes', themesRoutes )
//++
router.use('/themesChecklists', themesChecklistsRoutes )
//++
router.use('/usersModules', usersModulesRoutes )
//++
router.use('/userTasks', userTasksRoutes )

module.exports = router;