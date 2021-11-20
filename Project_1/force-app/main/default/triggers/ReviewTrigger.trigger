trigger ReviewTrigger on Review__c (before insert, before update) {
    if(Trigger.isBefore){
      if(Trigger.isInsert){
        TriggerHelper.ReviewTriggerHelp(Trigger.new);
      }
      //if(Trigger.isUpdate){
        //TriggerHelper.ReviewTriggerHelp(Trigger.old);
      }
  
    }
  
  }