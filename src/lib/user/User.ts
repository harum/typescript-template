class User {
  firstName: string;
  lastName: string;

  constructor(firstname: string, lastName: string) {
    this.firstName = firstname;
    this.lastName = lastName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export default User;
