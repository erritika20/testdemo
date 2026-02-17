/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["testdemo/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
