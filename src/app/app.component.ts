import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RTS-C5-UD34';
  name = 'Pau';
  input: any = "0";
  history: any = " ";

  decimals = false;
  positive = true;
  secondValue = false;

  updateInput(text: any) {
    this.input = "" + this.input + text;

    if (this.positive) {
      if (this.input.charAt(0) === "-") {
        this.input = this.input.substring(1);
      }
    } else if (this.input.charAt(0) != "-") {
      this.input = "-" + this.input;
    }
  }

  resetInput() {
    this.input = "0";
    this.decimals = false;
    this.positive = true;
  }

  updateHistory(text: any) {
    this.history = text;
  }

  resetHistory() {
    this.history = "";
  }

  dec() {
    if (!this.decimals) {
      this.updateInput(".")
      this.decimals = true;
    }
  }

  cButton() {
    this.resetInput();
    this.resetHistory();
  }

  ceButton() {
    this.resetInput();
  }

  deleteButton() {
    this.resetInput();
    this.resetHistory();
  }

  deleteHold(){
    this.resetHistory;
    this.resetInput;
  }

  sign() {
    if (this.positive) {
      this.positive = false;
    } else {
      this.positive = true;
    }
    this.updateInput("");
  }

  numClick(num: Number) {
     if (!(num === 0 && this.input == "0")) {
      if (this.secondValue) {
        this.resetInput();
        this.secondValue = false;
      }
      if (this.input == "0") {
        this.input = num;
      } else {
        this.updateInput(num);
      }
    }
  }

  equals() {
    let num1 = +this.history.slice(0, -2);
    let num2 = +this.input;
    let op = this.history.split(" ").pop();

    switch (op) {
      case '+':
        this.input = num1 + num2;
        break;
      case '-':
        this.input = num1 - num2;
        break;
      case '*':
        this.input = num1 * num2;
        break;
      case '/':
        this.input = num1 / num2;
        break;
      case '%':
        this.input = num1 % num2;
        break;
      default:
        break;
    }


  }

  basicOp(sign: String) {
    this.updateHistory(this.input + " " + sign);
    this.secondValue = true;
  }
}
