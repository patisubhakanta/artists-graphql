# Integrate Saleor API with Next.js SSR
- This project uses the Saleor API and Next.js SSR to display a product listing page, with search functionality to filter products by name. Users can click on a product to navigate to its details page.

  
## Features

- Fetches and displays products from a GraphQL API using the Saleor API.
- Uses Apollo Client to interact with the GraphQL API.
- Server-side data fetching and rendering for two pages:
    - Product Listing Page: Displays a list of products.
    - Product Details Page: Shows detailed information about a selected product.
- Styled using TailwindCSS for a responsive and modern design.


## Technologies Used

- Next.js: React framework for server-rendered or statically exported React apps.
- Apollo Client: A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- GraphQL: A query language for your API, allowing you to request only the data you need.
- Saleor API: A powerful GraphQL API for eCommerce that provides product, category, and order management.
- TailwindCSS: A utility-first CSS framework for rapid UI development.
- TypeScript: Provides static typing for better development experience and code quality.

## Getting Started

First, run the development server:

- Clone the repository
- Add .env.local file (Saleor API) as per .env.sample

```bash

npm install 

npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

API Used : ```https://metaphysics-production.artsy.net/v2```
