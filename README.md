# Amirtha Varshini Portfolio

A frontend-only React and Vite portfolio showcasing MIS reporting, data analytics, Excel Power Query, projects, skills, experience, and certifications.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The application is static and can be deployed directly to Vercel. The original resume is served from `public/resume/resume.pdf`.

## Configure the contact form

The contact form uses Web3Forms directly from the browser; no backend is required. Create the Web3Forms access key with the client's email address so portfolio enquiries are delivered directly to the client.

1. Create or log in to a Web3Forms account.
2. Create an access key using the client's email address.
3. Copy the access key.
4. Create a local `.env` file in the project root.
5. Add the following value:

   ```env
   VITE_WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY
   ```

6. Restart the Vite development server.
7. In Vercel, open the project.
8. Go to **Settings → Environment Variables**.
9. Add an environment variable with:

   - Name: `VITE_WEB3FORMS_ACCESS_KEY`
   - Value: the Web3Forms access key

10. Apply it to Production, Preview, and Development as appropriate.
11. Redeploy the project.
12. Submit a test message and confirm it reaches the client's email.

The repository includes `.env.example` as a template. The real `.env` file is ignored by Git and the access key must not be committed. Live email delivery is not confirmed until a real key is configured and a test submission succeeds.
