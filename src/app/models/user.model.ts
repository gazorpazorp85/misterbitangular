import MoveModel from './move.model';

export default class UserModel {

    constructor(public name:string = '', public coins:number = 100, public moves:MoveModel[] = []) {
    }
}