# Clerk Authentication Setup

## Quick Setup Instructions

1. **Create a Clerk Account**
   - Go to https://dashboard.clerk.com
   - Sign up for a free account
   - Create a new application

2. **Get Your Publishable Key**
   - In your Clerk dashboard, go to "API Keys"
   - Copy your "Publishable Key" (starts with `pk_test_` or `pk_live_`)

3. **Update Environment Variables**
   - Open the `.env` file in your project root
   - Replace `pk_test_placeholder_key_replace_with_real_key` with your actual Clerk publishable key

4. **Test the Integration**
   - Run `npm run dev`
   - Visit your application
   - Try clicking the Login/Sign Up buttons
   - The Clerk authentication modals should appear

## Features Integrated

✅ **Preserved Your Button Styles** - Your existing button designs are maintained
✅ **Login Page** - `/login` route with Clerk SignIn component
✅ **Sign Up Page** - `/signup` route with Clerk SignUp component  
✅ **User Button** - Shows user avatar when signed in
✅ **Conditional Rendering** - SignedIn/SignedOut components control what users see
✅ **Modal Support** - You can use `<SignInButton mode="modal" />` if preferred

## Usage Examples

```jsx
// Show content only to signed-in users
<SignedIn>
  <p>Welcome back!</p>
</SignedIn>

// Show content only to signed-out users  
<SignedOut>
  <button>Please sign in</button>
</SignedOut>

// Get user information
const { user, isSignedIn } = useUser();
```

## Troubleshooting

- If you see authentication errors, double-check your publishable key
- Make sure your `.env` file is in the project root
- Restart your dev server after changing environment variables
- Check the browser console for any error messages

## Next Steps

Once Clerk is working, you can:
- Configure social login providers (Google, GitHub, etc.)
- Customize the appearance of auth components
- Add user profile management
- Set up webhooks for user events
- Configure email templates
