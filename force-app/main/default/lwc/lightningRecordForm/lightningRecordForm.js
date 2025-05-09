import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LightningRecordForm extends LightningElement {
    // Specify fields that belong to the Contact object
    fields = ['Name', 'Amount', 'ContactId', 'StageName', 'CloseDate', 'Phone', 'Email'];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Success!",
            message: "Record has been saved successfully.",
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
}
