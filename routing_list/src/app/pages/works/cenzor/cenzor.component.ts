import { Component } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss'],
})
export class CenzorComponent {
  public headtext = 'Angular list of prohibates words';
  public badwd1 = 'Bad words:';
  public badWords_text = 'java , tottenham';
  public badWords = 'bw-text2';
  public text_placeholeder = 'Word here...';
  public word = 'input-text';
  public add = 'btn-add';
  public remove = 'btn-reset';
  public area = 'textarea';
  public cenzor = 'btn-cenzor';

  public inputWords!: string;
  public areaText!: string;
  public confirm = true;
  public accept = true;

  constructor() {}

  ngOnInit(): void {}

  addword(): void {
    if (this.inputWords) {
      this.badWords_text += ' ' + this.inputWords;
      this.inputWords = '';
      this.confirm = true;
      console.log('hellooo');
    } else {
      this.confirm = false;
    }
  }

  removewords(): void {
    this.badWords_text = '';
    this.inputWords = '';
    this.areaText = '';
  }
  cenzortext(): void {
    if (this.areaText) {
      this.checker();
      this.accept = true;
    } else {
      this.accept = false;
    }
  }

  checker(): void {
    let text = this.areaText.split(' ');
    let list = this.badWords_text.split(' ');

    list.map((bad) => {
      text = text.map((list) =>
        list.toLowerCase() === bad
          ? (list = list
              .split('')
              .map((letter) => (letter = '*'))
              .join(''))
          : list
      );
    });
    this.areaText = text.join(' ');
  }
}
