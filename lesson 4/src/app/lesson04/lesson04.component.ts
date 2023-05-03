import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson04',
  templateUrl: './lesson04.component.html',
  styleUrls: ['./lesson04.component.scss'],
})
export class Lesson04Component {
  public contacts: IContacts[] = [
    {
      fname: 'Petya',
      sname: 'Zhuk',
      pnumber: '0631111111',
    },
    {
      fname: 'Petro',
      sname: 'Petriv',
      pnumber: '0631222222',
    },
    {
      fname: 'Alejandro',
      sname: 'Zhuk',
      pnumber: '0633333333',
    },
    {
      fname: 'Vasylyna',
      sname: 'Vrublevska',
      pnumber: '0635555555',
    },
    {
      fname: 'Ira',
      sname: 'Tylar',
      pnumber: '0636666666',
    },
    {
      fname: 'Sofia',
      sname: 'Zhuk',
      pnumber: '0637777777',
    },
  ];

  public newContact = {
    fname: '',
    sname: '',
    pnumber: '',
  };

  public field = '';
  public hideFn = false;
  public showFn = true;
  public hideSn = false;
  public showSn = true;
  public hidePhn = false;
  public showPhn = true;
  public IndeX: any;
  public addclient = false;


  NameSort(): void {
    this.hideFn = true;
    this.showFn = !this.showFn;
    this.hideSn = !this.hideFn;
    this.hidePhn = !this.hideFn;
  }

  SurnameSort(): void {
    this.hideSn = true;
    this.showSn = !this.showSn;
    this.hideFn = !this.hideSn;
    this.hidePhn = !this.hideSn;
  }

  PhoneSort(): void {
    this.hidePhn = true;
    this.showPhn = !this.showPhn;
    this.hideFn = !this.hidePhn;
    this.hideSn = !this.hidePhn;
  }

  deleteUser(index: number): void {
    this.contacts.splice(index, 1);
  }

  editUser(index: number) {
    this.addclient = true;
    this.IndeX = index;
    this.newContact.fname = this.contacts[index].fname;
    this.newContact.sname = this.contacts[index].sname;
    this.newContact.pnumber = this.contacts[index].pnumber;
  }

  addPhone(): void {
    this.addclient = true;
    
  }

  closeMenu(): void {
    this.addclient = false;
  }

  saveClient(): void {
    if (this.IndeX === undefined) {
      let newUser = {
        fname: this.newContact.fname,
        sname: this.newContact.sname,
        pnumber: this.newContact.pnumber,
      };
      this.contacts.push(newUser);
    } else {
      this.contacts[this.IndeX].fname = this.newContact.fname;
      this.contacts[this.IndeX].sname = this.newContact.sname;
      this.contacts[this.IndeX].pnumber = this.newContact.pnumber;
    }

    this.resetInput();
    this.IndeX = undefined;
    this.addclient = false;
  }
  resetInput(): void {
    this.newContact.fname = '';
    this.newContact.sname = '';
    this.newContact.pnumber = '';
  }

  constructor() {}

  ngOnInit(): void {}
}

export interface IContacts {
  fname: string;
  sname: string;
  pnumber: string;
}
