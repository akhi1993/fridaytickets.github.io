/**
 * Created by AKHI1993 on 7/10/2016.
 */
'use strict';

  eventsApp.controller('EventController',

      function EventController($scope){
          $scope.movie = {
                session : [
                    {
                        name : 'kammatipaadam',
                        genere : 'action/drama',
                        language : 'malayalam',
                        image : 'images/movies/thumb/KammattiPaadam.jpg'
                    },
                    {
                        name : 'Happy Wedding',
                        genere : 'Comedy/drama',
                        language : 'malayalam',
                        image : 'images/movies/thumb/happywedding.jpg'
                    },
                    {
                        name : 'School Bus',
                        genere : 'Family/drama',
                        language : 'malayalam',
                        image : 'images/movies/thumb/schoolbus.jpg'
                    },
                ]
          }
          $scope.theater = {
              session : [
                  {
                      name : 'Ganam Cinemas',
                      place: 'Valarkkavu',
                      image : 'images/theatre/thumb/ganam.jpg'
                  },
                  {
                      name : 'Girija Theater',
                      place: 'Paatturaykkal',
                      image : 'images/theatre/thumb/girija.jpg'
                  },

              ]
          }
      }

  );