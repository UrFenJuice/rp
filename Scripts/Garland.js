var garland = {
    divStepPrefix: "divTenantStep",
    cssStepTemplate: "step{0}",
    cssCurrentStep: "current-step",
    currentStep: 1,
    firstStep: 1,
    finishStep: 5,
    validSteps: [],
    btnPrevioId: "",
    btnContinueId: "",
    btnSubmitId: "",
    showNextStep: function (inc) {
        if (this.currentStep + inc >= this.firstStep && this.currentStep + inc <= this.finishStep) {
            this.showStep(this.currentStep + inc);
        }
    },
    showStep: function (step) {
        if (step == this.currentStep) {
            // No step change
            this.showStepInner(step);
            return;
        }      
      
        if (this.currentStep - step > 0) { // go to previos step
            this.currentStep = step;
            this.showStepInner(step);
        }else{
            // Test current step
            $("#" + this.divStepPrefix + this.currentStep).bootstrapValidator('validate');
            var isValid = $("#" + this.divStepPrefix + this.currentStep).data('bootstrapValidator').isValid();
            this.validSteps[this.currentStep - 1] = isValid;
            var i = 0;
            do{
                isValid = this.validSteps[i++];
                if(!isValid){
                    this.showStepInner(i);

                    var validator = $("#" + this.divStepPrefix + i).data('bootstrapValidator');
                    if (validator == undefined) { // Dont have validator, then stop only step in first check                        
                        isValid = this.validSteps[i - 1];
                        this.validSteps[i - 1] = true;
                    } else {                        
                        this.validSteps[i - 1] = validator.isValid();
                    }
                    
                    //isValid = true; // while test server validation
                }
            }while(isValid && i<step-1)
          
            if(isValid && i>=step-1){ // Go to next step
                this.validSteps[i - 1] = isValid;
                this.currentStep = step;
                this.showStepInner(step);
            }else{
                this.validSteps[i - 1] = false;
                this.currentStep = i;
                this.showStepInner(i);
            }
        }   
    },
    showStepInner: function (step) {        
        this.hideAllSteps();
        $("#" + this.divStepPrefix + step).show();
        this.showButtonByStep(step);       
        $("." + this.cssStepTemplate.replace("{0}", step)).addClass(this.cssCurrentStep.replace("{0}", step));//.focus();
    }, 
    hideAllSteps: function () {
        for (var i = 1; i <= this.finishStep; i++) {
            $("#" + this.divStepPrefix + i).hide();
            $("." + this.cssCurrentStep.replace("{0}", i)).removeClass(this.cssCurrentStep.replace("{0}", i));
        }
    },
    showButtonByStep: function (step) {
        if (step == this.firstStep) {
            $("#" + this.btnPrevioId).hide();
            $("#" + this.btnContinueId).show();
            $("#" + this.btnSubmitId).hide();
        } else if (step == this.finishStep) {
            $("#" + this.btnPrevioId).show();
            $("#" + this.btnContinueId).hide();
            $("#" + this.btnSubmitId).show();
            this.initSummary();
        }else{
            $("#" + this.btnPrevioId).show();
            $("#" + this.btnContinueId).show();
            $("#" + this.btnSubmitId).hide();
        } 

        //$("#<%:btnPrevios.ClientID%>").hide();
        //$("#<%:btnContinue.ClientID%>").show();
        //$("#<%:btnConfirmAndInvite.ClientID%>").hide();

    }, 
    initSummary: function () { } // dummy need replace into page
}