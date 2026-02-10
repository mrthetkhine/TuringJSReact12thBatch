const user = {
  id: 123,
 
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
user.becomeAdmin();
console.log("user ", user);

type User = {
  id: number;
  admin: boolean;
};
interface DB {
users: User[];
  filterUsers(filter: (this: User) => boolean): User[];
}
function getDB(): DB {
    
  const db: DB = {
    users:[
        { id: 1, admin: false },
        { id: 2, admin: true },
    ],
    filterUsers(filter: (this: User) => boolean): User[] {
      let result: User[] = [];
        for (const user of this.users) {
            if (filter.call(user)) {
                result.push(user);
            }
        }
        return result;
    },
  };
  return db;
}
let result = getDB().filterUsers(() => user.admin);
console.log('result ',result);