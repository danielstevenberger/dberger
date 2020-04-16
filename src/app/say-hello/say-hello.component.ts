import { Component, OnInit } from "@angular/core";
import { SendMailServiceService } from "../send-mail-service.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-say-hello",
  templateUrl: "./say-hello.component.html",
  styleUrls: ["./say-hello.component.css"],
})
export class SayHelloComponent implements OnInit {
  public subscription: Subscription;
  sendEmailForm: FormGroup;

  constructor(private sendmailservice: SendMailServiceService) {}

  loading = false;
  sent = false;

  ngOnInit(): void {
    this.sendEmailForm = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      message: new FormControl(null),
    });
  }
  sendMail() {
    console.log(this.sendEmailForm.value);
    this.loading = true;
    this.subscription = this.sendmailservice.sendEmail(this.sendEmailForm.value).
    subscribe(data => {
      let msg = data['message']
      alert(msg);
      console.log(data, "success");
      this.loading = false;
    }, error => {
      console.error(error, "error");
      this.loading = false;
    } );
  }
}
