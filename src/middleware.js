export default (req, res) => {
	res.send(`
		<!doctype html>
	    <html>
	        <header>
	            <title>My Universal App</title>
	        </header>
	        <body>
	            <div id='app'></div>
	            <script src='bundle.js'></script>
	        </body>
	    </html>
	`);
};