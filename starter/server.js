// ========================================
// TODO: Task 1 - Create Express App
// ========================================

const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

app.use(express.static(PUBLIC_DIR));

// with localhost:3000/test you see my message
app.get("/test", (req, res) => {
  res.send("Am I doing this right?");
});

// for index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// for about.html
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// for contact.html
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// ========================================
// TODO: Task 2 - Serve Static Files
// ========================================
// Configure Express to serve static files from the 'public' directory
// This middleware automatically serves HTML, CSS, images, etc.
// Hint: This single line replaces all the file reading logic from Workshop 02!
// mime type
const MIME_TYPES = mime.getType(path);

// Jatka tästä yllä oleva on getType, alla lookup - onko alla ylimääräistä/ voiko lyhentää
if (!res.getHeader('content-type')) {
  var charset = mime.charsets.lookup(type);
  res.setHeader('Content-Type', type + (charset ? '; charset=' + charset : ''));
}

// ========================================
// BONUS: Custom Request Logging Middleware
// ========================================
// Uncomment this middleware to log all incoming requests:
/*
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Don't forget to call next()!
});
*/


// ========================================
// TODO: Task 3 - Add Route Handlers
// ========================================
// Create route handlers for the main pages

// About home route
// TODO: Create a GET route for '/'
// Hint: serve 'index.html'


// About page route
// TODO: Create a GET route for '/about'
// Hint: Similar to the home page route, but serve 'about.html'


// Contact page route
// TODO: Create a GET route for '/contact'
// Hint: Similar to the home page route, but serve 'contact.html'


// ========================================
// TODO: Task 4 - Create API Endpoint
// ========================================
// Create a JSON API endpoint that returns current date/time

// TODO: Create a GET route for '/api/time'
// It should return JSON with 'datetime' and 'timestamp' properties
// Hint: Use res.json() to send JSON response

// ========================================
// BONUS: Task 6 - Express Router (Optional)
// ========================================
// Organize API routes using Express Router
// Complete section below to use Router:

/*
const apiRouter = express.Router();

// Move the /api/time route to the router


// Add more API routes here if needed
apiRouter.get('/info', (req, res) => {
    res.json({
        name: 'Workshop03 Express Server',
        version: '1.0.0',
        nodeVersion: process.version
    });
});

// Mount the API router
app.use('/api', apiRouter);
*/


// ========================================
// TODO: Task 5 - Error Handling Middleware
// ========================================

// 404 Handler - Must be placed AFTER all other routes
// This catches any requests that don't match the routes above
// TODO: Complete:
/*
app.use((req, res) => {
    complete this line - res.status(404)....);
});
*/


// 500 Error Handler - Must be placed LAST
// This catches any errors that occur in your application
// Note: Error handling middleware has 4 parameters: (err, req, res, next)
// TODO: Complete:
/*
app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    complete this line - res.status(500)....);
});
*/


// ========================================
// Start the Server
// ========================================
// TODO: Uncomment the code below to start the server:
/*
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log('\n📍 Available routes:');
    console.log('  GET /              -> Home page');
    console.log('  GET /about         -> About page');
    console.log('  GET /contact       -> Contact page');
    console.log('  GET /api/time      -> Current date/time API');
    console.log('\n⏹️  Press Ctrl+C to stop the server\n');
});
*/

// ========================================
// 🎯 IMPLEMENTATION TIPS
// ========================================
/*
1. Complete tasks in order (Task 1 → Task 6)
2. Uncomment code sections as you work through each task
3. Test each task before moving to the next one
4. Remember: Middleware order matters!
   - Static files first
   - Route handlers second
   - 404 handler third
   - Error handler last

5. Key Express Methods:
   - app.use() → Apply middleware
   - app.get() → Define GET routes
   - res.sendFile() → Send HTML files
   - res.json() → Send JSON responses
   - res.status() → Set HTTP status code

6. Don't forget to:
   - Run 'npm install' before starting
   - Check the console for helpful error messages
   - Test in the browser after each task
*/