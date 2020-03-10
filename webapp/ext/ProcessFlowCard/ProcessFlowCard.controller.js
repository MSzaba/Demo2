(function () {
    "use strict";
    /*global sap, jQuery */
    
   /*
   Here you can put Controller code
   */
 
    sap.ui.controller("tst.demo2.Demo2.ext.ProcessFlowCard.ProcessFlowCard", {
         
        onInit: function () {
             //this.setWidth("100%");
             
            this.byId("idIconTabBar").attachBrowserEvent("click", this.clickHandler);

		
        },
 
        onAfterRendering: function () {
 
             
        },
        
        clickHandler: function(oEvent) {
			//console.warn("Click on" + oEvent.toElement.id);
			switch(oEvent.toElement.id) {
				case "card00Original--Attributes-text":
					sap.m.URLHelper.redirect("https://pd6-001.wdf.sap.corp/sap/bc/ui2/flp?saml2=disabled&amp;sap-client=001&amp;sap-language=EN#PlanningModel-configureAttributes", true);
					break; 
				case "card00Original--MasterDataTypes-text":
					sap.m.URLHelper.redirect("https://pd6-001.wdf.sap.corp/sap/bc/ui2/flp?saml2=disabled&amp;sap-client=001&amp;sap-language=EN#PlanningModel-configureMasterData", true);
					break;
				case "card00Original--TimeProfiles-text":
					sap.m.URLHelper.redirect("https://pd6-001.wdf.sap.corp/sap/bc/ui2/flp?saml2=disabled&amp;sap-client=001&amp;sap-language=EN#PlanningModel-configureTimeProfile", true);
					break;
				case "card00Original--PlanningAreas-text":
					sap.m.URLHelper.redirect("https://pd6-001.wdf.sap.corp/sap/bc/ui2/flp?saml2=disabled&amp;sap-client=001&amp;-language=EN#PlanningModel-configurePlanningArea", true);
					break;
			}
		}
 
 
    });
})();