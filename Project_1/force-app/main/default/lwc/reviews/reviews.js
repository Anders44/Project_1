import { LightningElement, api } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import REVIEW from '@salesforce/schema/Review__c';
import REIVEW_LOCATION from '@salesforce/schema/Review__c.Location__c';
import REVIEW_NAME_FIELD from '@salesforce/schema/Review__c.Name';
import RESTAURANT_REVIEW_FIELD from '@salesforce/schema/Review__c.Restaurant_Review__c';

export default class Reviews extends LightningElement {
    @api objectApiName;

    fields= [REVIEW_NAME_FIELD, REIVEW_LOCATION, RESTAURANT_REVIEW_FIELD];

    objectApiName = REVIEW;
    //review = RESTAURANT_REVIEW_FIELD;

    handleSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Record saved.',
            variant: 'success'

        });
        this.dispatchEvent(toastEvent);
}
}