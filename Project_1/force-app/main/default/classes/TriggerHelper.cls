public with sharing class TriggerHelper {
    public static void CaseTriggerHelp(List<Case> conts) {
      for(Case c : conts){
        if(c.ContactId == null){
          c.addError('Must include a contact');
        }
      }

    }
}