const forceHTTPS = (req, res, next) => {
    let isSecure = req.secure;

    if(!isSecure) {
        isSecure = ((req.headers["x-forwarded-proto"] || '').substring(0,5) === 'https');
    }

    if(isSecure) {
        next();
    } else {
        // Only redirect GET methods
        if(req.method === "GET" || req.method === 'HEAD') {
            var host = req.headers['x-forwarded-host'] || req.headers.host;
            res.redirect(301, "https://" + host + req.originalUrl);
        } else {
            res.status(403).send("Please use HTTPS when submitting data to this server.");
        }
    }
}

module.exports = forceHTTPS;