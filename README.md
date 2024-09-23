# 🏜️ The Wild Oasis

Welcome to The Wild Oasis! This is a hotel management web app, where hotel employees can manage cabins, bookings, and guests. It uses Supabase as the backend and implements advanced React techniques such as HOCs and React Query.

# 🖥️ Demo
You can check **live website** [The Wild Oasis](https://wild-oasis1.vercel.app/).

- Landing Page
![image](https://github.com/user-attachments/assets/0f329b3f-4107-49f2-bd34-aca5c586c898)

  

# 🚀 Key Technologies


- <img src="https://github.com/user-attachments/assets/4579643d-5b77-4e0b-b320-be205fc587da" width="20" height="20">  React Query: Efficient data fetching and caching.

- <img src="https://github.com/user-attachments/assets/078dec5d-c427-4d18-b72c-c36b28491721" width="20" height="20">  Styled Components: Modular and scalable component styling.


- <img src="https://github.com/user-attachments/assets/da054759-56f1-40c1-abac-34ab9e73e1c7" width="20" height="20">  React Hook Form: Simple, powerful form handling

- <img src="https://github.com/user-attachments/assets/ec9eda63-db63-4f73-99d5-931a1d340659" width="20" height="20">  Supabase: Authentication and real-time database.

- 🏗️ The Compound Component Pattern: Maintainable UI components.

- 🌑 Dark Mode: Seamless toggle between light and dark themes.

- 📊 Visualizing Data with Recharts: Visualizing user data with dynamic charts

# ✨ Features

- User Authentication: Secure login using Supabase.
- Interactive Map: Explore locations in an intuitive interface.
- Real-time Data: Dynamic content loading and caching using React Query.
- Theming: Supports both light and dark modes.
- Responsive Design: Mobile-friendly layout for all devices.
- Forms: Easy-to-use forms with validation via React Hook Form.
- Data Visualization: Display travel data in interactive charts.

🛠️ Installation & Setup
Clone the repository:
```
git clone https://github.com/your-username/the-wild-oasis.git
cd the-wild-oasis
```

Install dependencies:

```
npm i
```
Set up supabase by creating supabase.js file then creating a supabase and finally export it to your project 
```
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = YOUR_SUPABASE_URL;
const supabaseKey = YOUR_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)
  
export default supabase;

```

Run and Test Project
```
npm run dev
```

## 🤝 🏖️ Contribute to the Oasis
We're excited for you to be a part of this journey. Whether you're fixing a bug or building new features, your contribution will help keep The Wild Oasis flourishing. Feel free to submit issues, pull requests or emailing me [Mahmoud Alaa](mailto:mahmoud.alaa.dev1@gmail.com?subject=[GitHub]%20Wild%20Oasis)








