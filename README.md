# RBAC UI DEMO

## How to run

Hosted live link: [https://ui-demo-rbac.vercel.app](https://ui-demo-rbac.vercel.app/dashboard/users)

To set up the project locally, run the following commands.
```
git clone https://github.com/DarkFalc0n/ui-demo-rbac
cd ui-demo-rbac
pnpm i
pnpm dev
```
This will run the Next app at `localhost:3003`

## Core System

An ideal RBAC system contains the following entities: 

- Users
- Groups
- Roles
- Permissions

The DB structure should be as follows:
```
user schema
| u_id | u_name | u_email | u_avatar |
|------|--------|---------|----------|
|      |        |         |          |

role schema
| role_id | role_name | role_color |
|---------|-----------|------------|
|         |           |            |

permission schema
| perm_id | perm_name | perm_desc |
|---------|-----------|-----------|
|         |           |           |

group schema
| group_id | group_name | group_desc |
|----------|------------|------------|
|          |            |            |
```

The following should be the bridge tables, which follow similar `one-to-many relationship`.

```
| u_id | role_id |   
|------|---------| 
|      |         |

| role_id | perm_id | 
|---------|---------|
|         |         |   

| group_id | role_id | 
|----------|---------|
|          |         |

| group_id | u_id |
|----------|------|
|          |      |

```
![image](https://github.com/user-attachments/assets/935a6467-13da-42b6-a718-6bbc3b56e02b)



## Technological Choices
This project uses Nextjs as the Frontend Framework.
### UI 
- `TailwindCSS` for responsive design.
- `Shadcn UI` elements.
### State Management
- `Zustand` has been used as a state management library.
- Hooks such as these have been used to mimic backend access:
```ts
export const useRole = () => {
  const { roles, setRoles } = useRoleStore();

  const getRoleById = (roleId: number) => roles.find((r) => r.id === roleId);

  const getAllRoles = () => roles;

  const addRole = (role: IRole) => setRoles([...roles, role]);

  const modifyRole = (roleId: number, role: IRole) => {
    const index = roles.findIndex((r) => r.id === roleId);
    if (index === -1) return;
    roles[index] = role;
    setRoles([...roles]);
  };

  const deleteRole = (roleId: number) =>
    setRoles(roles.filter((r) => r.id !== roleId));

  return { getRoleById, getAllRoles, addRole, modifyRole, deleteRole };
};
```

### Validation
- `Zod` has been used to validate schema and input data, to prevent invalid inputs and keep the client side safe.
  
Most schema files can be found [here](https://github.com/DarkFalc0n/ui-demo-rbac/tree/main/src/schema).

### Design Principles

- Atomic design: The UI components have been split into folders according to their complexity and hierarchy.

```
components
│   ├── atoms
│   ├── molecules
│   │   ├── forms
│   │   
│   │  
│   ├── pages
 ```
- Reusability: The components have been designed while keeping in mind the reusablity in different scenarios, and hence, have appropriate extensibility through props.
  
For example, the following form component designed for adding new Roles can be tweaked a little and used to edit existing roles:
<img src="https://github.com/user-attachments/assets/67492acc-ab07-4865-8554-51e4225eb779" height=400px >



