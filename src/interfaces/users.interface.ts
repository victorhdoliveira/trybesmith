export interface INewUser {
  username: string,
  vocation: string,
  level: number,
  password?: string,
}
    
export interface IUser extends INewUser{
  id: number,
}