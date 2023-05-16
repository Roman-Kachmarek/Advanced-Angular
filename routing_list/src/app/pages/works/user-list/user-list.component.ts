import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  public placeholderLogin = 'Enter login';
  public placeholderPass = 'Enter password';
  public placeholderMail = 'Enter email';
  public loginMain = 'login-main';
  public passMain = 'pass-main';
  public mailMain = 'mail-main';
  public heading = 'header';
  public loginInput = 'login-input';
  public passInput = 'pass-input';
  public mailInput = 'mail-input';
  public btnMain = 'btn-main';
  public userBtn = 'user-button';
  public tableHeader = 'table-header';
  public editBtn = 'btn-edit';
  public deleteBtn = 'btn-delete';
  public updateBtn = 'edit-btn';
  public editStatus = false;
  public editIndex!: number;

  public user = {
    login: '',
    pass: '',
    email: '',
  };

  public userArr: Array<{
    login: string;
    pass: string;
    email: string;
  }> = [];

  constructor() {}

  ngOnInit(): void {}

  addUser(): void {
    this.userArr.push(this.render());
    this.clearField();
  }

  deleteUser(index: number): void {
    console.log('user deleted');
    this.userArr.splice(index, 1);
  }

  editUser(index: number): void {
    this.user.login = this.userArr[index].login;
    this.user.pass = this.userArr[index].pass;
    this.user.email = this.userArr[index].email;
    this.editIndex = index;
    this.editStatus = true;
  }

  saveEditUser(): void {
    this.editStatus = false;
    this.userArr[this.editIndex].login = this.user.login;
    this.userArr[this.editIndex].pass = this.user.pass;
    this.userArr[this.editIndex].email = this.user.email;
    this.clearField();
  }

  render() {
    return {
      login: this.user.login,
      pass: this.user.pass,
      email: this.user.email,
    };
  }

  clearField(): void {
    this.user.login = '';
    this.user.email = '';
    this.user.pass = '';
  }
}
