import { Injectable } from '@angular/core';

@Injectable()
export class TreeService {

  private contacts = [
    {
      id: 1,
      name: "Friends",
      type: "Group",
      contacts: [
        {
          id: 2,
          name: "Udi",
          type: "Contact"
        },
        {
          id: 3,
          name: "Tommy",
          type: "Contact"
        },
        {
          id: 6,
          name: "Old Friends",
          type: "Group",
          contacts: [
            {
              id: 7,
              name: "Itay",
              type: "Contact"
            },
          ]
        },
      ]
    },
    {
      id: 4,
      name: "Family",
      type: "Group",
      contacts: [
        {
          id: 5,
          name: "Roni",
          type: "Contact"
        },
      ]
    },
    {
      id: 8,
      name: "Ori",
      type: "Contact"
    },
  ];

  private _contactTree = {
    contacts: this.contacts
  };
  constructor() { }

  get rootTree() {
    return this._contactTree;
  }
}