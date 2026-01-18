
type userRole = {
    role: string;
}

function assignRole(userRole: userRole) {
    console.log(userRole.role);
}

assignRole({ role: "testtest" });


export enum UserRole2 {
    Member = "member",
    Admin = "admin",
    Manager = "manager"
}

function assignRole2(userRole: UserRole2) {
    console.log(userRole); 
}

let x = UserRole2.Member
assignRole2(x);