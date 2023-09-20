// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import TasksController from "./tasks_controller"
import StimulusReflex from 'stimulus_reflex'
import consumer from '../channels/consumer'
import controller from '../controllers/application_controller'
import CableReady from 'cable_ready'
application.register("tasks", TasksController)
application.consumer = consumer
StimulusReflex.initialize(application, { controller, isolate: true })
StimulusReflex.debug = process.env.RAILS_ENV === 'development'
CableReady.initialize({ consumer })