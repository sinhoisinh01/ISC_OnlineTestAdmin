// Phan Tiến Hưng
// Helper Factory
app.factory("HelperFactory", function(){
	return {
    BASE_FE_URL : location.origin + location.pathname,
    BASE_BE_URL : "http://localhost:8181/onlinetest/",
	}
});
