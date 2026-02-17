/*global QUnit*/

sap.ui.define([
	"testdemo/controller/Testdemo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Testdemo Controller");

	QUnit.test("I should test the Testdemo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
