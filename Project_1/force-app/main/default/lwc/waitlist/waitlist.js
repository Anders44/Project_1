import { LightningElement, api } from 'lwc';

export default class Waitlist extends LightningElement {
    @api
    myFunction(){
        var text = "";
        var inputs = this.template.querySelectorAll("input[type=text]");
        for (var i = 0; i < inputs.length; i++) {
            text += inputs[i].value;
        }
        var li = document.createElement("li");
        var node = document.createTextNode(text);
        li.appendChild(node);
        this.template.querySelector(".list").appendChild(li);
    }
}