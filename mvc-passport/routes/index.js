const express = require('express');

const routes = express.Router();

const passport = require('passport');

const fileupload = require('../config/fileupload');

//controller

const RegisterController = require('../controller/RegisterController');

const controller = require('../controller/MainController'); 

const ForgotPassController = require('../controller/ForgotPassController');

const ProfileController = require('../controller/ProfileController');

//routes

routes.get('/',controller.login);

routes.get('/register',RegisterController.register);

routes.post('/registerData',RegisterController.registerData);

routes.get('/login',controller.login);

routes.get('/logout',controller.logout);

routes.post('/loginData',passport.authenticate('local',{failureRedirect : '/'}),controller.loginData);

routes.get('/dashboard',passport.checkAuthentication,controller.dashboard);

routes.get('/addblog', passport.checkAuthentication, controller.addblog);

routes.post('/insertdata', fileupload, controller.insertdata);

routes.get('/viewblog', passport.checkAuthentication, controller.viewblog);

routes.get('/DeleteBlog', controller.deletedata);

routes.get('/EditBlog', controller.editdata);

routes.get('/ForgotPassword', ForgotPassController.ForgotPassword);

routes.post('/forgotemail', ForgotPassController.forgotemail);

routes.get('/OTP', ForgotPassController.OTP);

routes.post('/sendOTP', ForgotPassController.sendOTP);

routes.get('/newPassword', ForgotPassController.newPassword);

routes.post('/newPassPort', ForgotPassController.newPassPort);

routes.get('/profile', ProfileController.profile);

routes.post('/changeprofile', ProfileController.changeprofile);

module.exports = routes;