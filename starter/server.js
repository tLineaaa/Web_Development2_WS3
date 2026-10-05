// ========================================
// T1 - Created Express App
// ========================================

const { time } = require('console');
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

// ========================================
// T2 - Served Static Files
// ========================================
app.use(express.static(PUBLIC_DIR));

// ========================================
// T3 - Added Route Handlers
// ========================================

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

// mime type
/*const MIME_TYPES = mime.getType(path);

// Yllä oleva on getType, alla lookup - onko alla ylimääräistä/ voiko lyhentää
if (!res.getHeader('content-type')) {
  var charset = mime.charsets.lookup(type);
  res.setHeader('Content-Type', type + (charset ? '; charset=' + charset : ''));
}
*/
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
// T4 - Created API Endpoint
// ========================================

app.get('/api/time', (req, res) => {
  res.json({
    datetime: new Date().toDateString(),
    timestamp: new Date().toLocaleTimeString()
});
});

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
// T5 - Error Handling Middleware
// ========================================
// This catches any requests that don't match the routes above

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// 500 Error Handler - Must be placed LAST
// This catches any errors that occur in your application
app.use((err, req, res, next) => {
    console.error('Server Error:', err.stack);
    res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
});

// ========================================
// Start the Server
// ========================================
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log('\n📍 Available routes:');
    console.log('  GET /              -> Home page');
    console.log('  GET /about         -> About page');
    console.log('  GET /contact       -> Contact page');
    console.log('  GET /api/time      -> Current date/time API');
    console.log('\n⏹️  Press Ctrl+C to stop the server\n');
});


// ========================================
// TIPS
// ========================================
/*
  Middleware order matters!
   - Static files first
   - Route handlers second
   - 404 handler third
   - Error handler last

  Key Express Methods:
   - app.use() → Apply middleware
   - app.get() → Define GET routes
   - res.sendFile() → Send HTML files
   - res.json() → Send JSON responses
   - res.status() → Set HTTP status code

*/