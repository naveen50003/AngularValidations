angular.module('addBookModule').

        directive('myUpload', [function () {
            return {
                restrict: 'A',
                link: function (scope, elem, attrs) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        scope.image = e.target.result;
                        scope.$apply();
                    }

                    elem.on('change', function() {
                        reader.readAsDataURL(elem[0].files[0]);
                    });
                }
            };
        }]);