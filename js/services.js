angular.service('Comic', function ($resource) {
    return $resource('api/comics/:comicId', {}, {
        update: {method:'PUT'}
    });
});