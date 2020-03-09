sap.ui.define(["sap/ovp/cards/generic/Component"], function (Component) {

	"use strict";

	/* component for custom card */
	return Component.extend("tst.demo2.Demo2.ext.ProcessFlowCard.Component", {
		// use inline declaration instead of component.json to save 1 round trip
		metadata: {
			properties: {
				"contentFragment": {
					"type": "string",
					"defaultValue": "tst.demo2.Demo2.ext.ProcessFlowCard.ProcessFlowCard"
				},
                "countHeaderFragment": {
                    "type": "string",
                    "defaultValue": "sap.ovp.cards.generic.CountHeader"
                },
				"footerFragment": {
					"type": "string",
					"defaultValue": ""
				}
			},

			version: "@version@",

			library: "sap.ovp",

			includes: [],

			dependencies: {
				libs: ["sap.m"],
				components: []
			},
			config: {},
			customizing: {
				"sap.ui.controllerExtensions": {
					"sap.ovp.cards.generic.Card": {
						controllerName: "tst.demo2.Demo2.ext.ProcessFlowCard.ProcessFlowCard"
					}
				}
			}
		}
	});
});