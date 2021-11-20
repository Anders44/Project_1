public with sharing class ReviewUpdate {
    public static void ReviewTriggerHelp(List<Review__c> conts) {
      for(Review__c c : conts){
        if(c.Location__c == null){
          c.Location__c = 'Default Location';
        }
      }

    }
}
