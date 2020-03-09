(function () {
    "use strict";
    /*global sap, jQuery */
    
   /*
   Here you can put Controller code
   */
 
    sap.ui.controller("tst.demo2.Demo2.ext.ProcessFlowCard.ProcessFlowCard", {
         
        onInit: function () {
             //this.setWidth("100%");
             
            this.byId("Attributes").attachEvent("click", function() {
				sap.m.MessageToast.show("Click on Attributes" );
				/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
				console.warn("Attributes");
			});
			this.byId("MasterDataTypes").attachEvent("click", function() {
				sap.m.MessageToast.show("Click on MasterDataTypes" );
				/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
				console.warn("MasterDataTypes");
			});
			this.byId("TimeProfiles").attachEvent("click", function() {
				sap.m.MessageToast.show("Click on TimeProfiles" );
				/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
				console.warn("TimeProfiles");
			});
			this.byId("PlanningAreas").attachEvent("click", function() {
				sap.m.MessageToast.show("Click on PlanningAreas");
				/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
				console.warn("PlanningAreas");
			});
		
        },
 
        onAfterRendering: function () {
 
             
        },
        
        clickHandler: function(oEvent) {
			sap.m.MessageToast.show("Click on" + oEvent.getId());
		}
 
 
    });
})();