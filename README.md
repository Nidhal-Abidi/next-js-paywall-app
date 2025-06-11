# Next.js Paywall App

## 🔄 Routes & Endpoints

### Public Pages

| Path        | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| `/`         | Home page with **Login** & **Register**                          |
| `/login`    | Email & password form to **sign in**                             |
| `/register` | Form for first name, last name, email & password to **register** |

### Authenticated (User must be logged in)

| Path            | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| `/dashboard`    | Shows user’s first & last name and subscription status.     |
| `/payment`      | One-click **Pay** button flips `has_subscription` to `true` |
| `/visa-checker` | Simple informational form (no external fetch)               |

### Premium (User must be logged in **and** `has_subscription = true`)

| Path                          | Description                                    |
| ----------------------------- | ---------------------------------------------- |
| `/premium/document-templates` | List of visa document templates for copy/paste |
