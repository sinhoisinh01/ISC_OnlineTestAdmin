/*
 * Author: Phan Tiến Hưng
 * Description: Controller for image galery
 */
app.controller('ImageGaleryController', function($scope, Oauth2Factory){
  $scope.images = [
    "https://www.w3schools.com/css/img_fjords.jpg",
    "https://pbs.twimg.com/media/CJWTfzDVEAAsvQ9.jpg",
    "https://www.w3schools.com/css/img_fjords.jpg",
    "https://pbs.twimg.com/media/CJWTfzDVEAAsvQ9.jpg",
    "http://cdn-tn.fishki.net/26/upload/post/2016/08/03/2031124/gallery/tn/13613661-1097240853677281-7567982291202347917-o.jpg"
  ];
});
