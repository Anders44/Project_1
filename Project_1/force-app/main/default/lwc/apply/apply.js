import { LightningElement, api } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import APPLICATION from '@salesforce/schema/Application__c';
import APPLICATION_NAME from '@salesforce/schema/Application__c.Name';
import APPLICATION_EMAIL from '@salesforce/schema/Application__c.Email__c';
import APPLICATION_PHONE from '@salesforce/schema/Application__c.Phone__c';
import APPLICATION_TITLE from '@salesforce/schema/Application__c.Job_Title__c';



export default class Apply extends LightningElement {
    @api objectApiName;

    objectApiName = APPLICATION;

    fields = [APPLICATION_NAME, APPLICATION_TITLE, APPLICATION_PHONE, APPLICATION_EMAIL];

    handleSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Record saved.',
            variant: 'success'
    
        });
        this.dispatchEvent(toastEvent);
    }

}
