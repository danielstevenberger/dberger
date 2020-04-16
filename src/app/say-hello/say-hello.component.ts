import { Component, OnInit } from "@angular/core";
import { SendMailServiceService } from "../send-mail-service.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";

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
  emailError = false;
  emailSucess = false;

  ngOnInit(): void {
    this.sendEmailForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
    });
  }

  exitAlert(){
    this.emailSucess = false;
    this.emailError = false;
  }

  sendMail() {
    console.log(this.sendEmailForm.value);
    if (this.sendEmailForm.valid) {
      this.loading = true;
      this.subscription = this.sendmailservice
        .sendEmail(this.sendEmailForm.value)
        .subscribe(
          (data) => {
            let msg = data["message"];
            console.log(msg, "success");
            this.emailSucess = true;
            this.sendEmailForm.reset();
            this.loading = false;
          },
          (error) => {
            console.error(error, "error");
            this.loading = false;
          }
        );
    }
  }
}
