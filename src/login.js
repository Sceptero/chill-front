import AuthService from 'AuthService';

export class Login {
    static inject() {return [AuthService]}

  constructor(AuthService) {
    this.login = () => {
      if (this.username && this.password) {
        AuthService.login(this.username, this.password)
      }
    }
  }

  activate() {
    this.username = '';
    this.password = '';
  }
}