# RBAC UI DEMO

## How to run

You can find the live link hosted here: [https://ui-demo-rbac.vercel.app](https://ui-demo-rbac.vercel.app/dashboard/users)

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

The following should be the bridge tables, which follow the same one to many relationship.

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


## Technological Choices
