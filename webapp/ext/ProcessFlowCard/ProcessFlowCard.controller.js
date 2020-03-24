(function () {
    "use strict";
    /*global sap, jQuery */
    
   /*
   Here you can put Controller code
   */
 
    sap.ui.controller("tst.demo2.Demo2.ext.ProcessFlowCard.ProcessFlowCard", {
         
        onInit: function () {
             //this.setWidth("100%");
             
            this.byId("idIconTabBar").attachBrowserEvent("click", function(oClickEvent) {
            	this.clickHandler(oClickEvent);
            }.bind(this));
            this._viewModel = new sap.ui.model.json.JSONModel({"AttributesCount": 0, "MasterDataTypesCount" : 0, "TimeProfileCount": 0, "PlanningAreaCount": 0});
            this.getView().byId("idIconTabBar").setModel(this._viewModel, "view");
        },
 
        onAfterRendering: function () {
        	var modelA = this.getModel("ZMS_OBJECT_COUNT");
			modelA.metadataLoaded().then(function() {
				modelA.read("/ZMS_OBJECT_COUNT_2", {
					"success": function(oResult) { 
        			   var plarea_count = oResult.results[0].plarea_count;
        			   var attributes_count = oResult.results[0].attributes_count;
        			   var masterdata_count = oResult.results[0].masterdata_count;
        			   var timeprofile_count = oResult.results[0].timeprofile_count;
        			   this._viewModel.setProperty("/PlanningAreaCount", plarea_count);
        			   this._viewModel.setProperty("/AttributesCount", attributes_count);
        			   this._viewModel.setProperty("/MasterDataTypesCount", masterdata_count);
        			   this._viewModel.setProperty("/TimeProfileCount", timeprofile_count);
					}.bind(this)
				});

			}.bind(this));
			
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