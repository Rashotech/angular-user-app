export enum Filter {
    NAME = 'name',
    EMAIL = 'email',
    USERNAME = 'username'
}

export interface IFilter {
    name: Filter;
    checked: boolean;
} 
