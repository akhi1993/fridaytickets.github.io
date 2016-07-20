/**
 * Created by AKHI1993 on 7/10/2016.
 */
'use strict';

  eventsApp.controller('EventController',

      function EventController($scope){
          $scope.movie = {
                session : [
                    {
                        name : 'Kabali',
                        genere1 : 'Action',
                        genere2 : 'Crime',
                        category : 'U',
                        language : 'Tamil',
                        rating : '3 / 5',
                        image : 'images/movies/thumb/kabali.jpg'
                    },
                    {
                        name : 'Kasaba',
                        genere1 : 'Action',
                        genere2 : 'Comedy',
                        category : 'UA',
                        language : 'Malayalam',
                        rating : '2.5 / 5',
                        image : 'images/movies/thumb/kasaba.jpg'
                    },
                    {
                        name : 'Anuraga Karikkin Vellam',
                        genere1 : 'Family',
                        genere2 : 'Drama',
                        category : 'U',
                        language : 'Malayalam',
                        rating : '3 / 5',
                        image : 'images/movies/thumb/anuraga-karikkin-vellam.jpg'
                    },
                    {
                        name : 'Shajahanum Pareekuttiyum',
                        genere1 : 'Comedy',
                        genere2 : 'Drama',
                        category : 'U',
                        language : 'Malayalam',
                        rating : '2 / 5',
                        image : 'images/movies/thumb/shajahanum-pareekuttiyum.jpg'
                    },
                    {
                        name : 'Sulthan',
                        genere1 : 'Action',
                        genere2 : 'Sports',
                        category : 'UA',
                        language : 'Hindi',
                        rating : '3 / 5',
                        image : 'images/movies/thumb/sulthan.jpg'
                    },
                    {
                        name : 'Karinkunnam 6s',
                        genere1 : 'Drama',
                        genere2 : 'Sports',
                        category : 'U',
                        language : 'Malayalam',
                        rating : '3 / 5',
                        image : 'images/movies/thumb/karinkunnam-6s.jpg'
                    },
                    {
                        name : 'Ice Age - Collision Course',
                        genere1 : 'Animation',
                        genere2 : 'Comedy',
                        category : 'U',
                        language : 'English',
                        rating : '2.5 / 5',
                        image : 'images/movies/thumb/ice-age-collision-course.jpg'
                    },
                    {
                        name : 'Appa',
                        genere1 : 'Drama',
                        genere2 : 'Family',
                        category : 'U',
                        language : 'Tamil',
                        rating : '3.5 / 5',
                        image : 'images/movies/thumb/appa.jpg'
                    },
                    {
                        name : 'Oru Melliya Kodu',
                        genere1 : 'Mystery',
                        genere2 : 'Drama',
                        category : 'U',
                        language : 'Tamil',
                        rating : '2 / 5',
                        image : 'images/movies/thumb/oru-melliya-kodu.jpg'
                    },
                    {
                        name : 'Happy Wedding',
                        genere1 : 'Drama',
                        genere2 : 'Comedy',
                        category : 'U',
                        language : 'Malayalam',
                        rating : '3 / 5',
                        image : 'images/movies/thumb/happy-wedding.jpg'
                    },
                    {
                        name : 'School Bus',
                        genere1 : 'Drama',
                        genere2 : 'Family',
                        category : 'U',
                        language : 'Malayalam',
                        rating : '3 / 5',
                        image : 'images/movies/thumb/schoolbus.jpg'
                    },
                    {
                        name : 'Jacobinte Swargarajyam',
                        genere1 : 'Drama',
                        genere2 : 'Family',
                        category : 'U',
                        language : 'Malayalam',
                        rating : '3 / 5',
                        image : 'images/movies/thumb/jacobinte-swargarajyam.jpg'
                    },
                ]
          }
          $scope.theater = {
              session : [
                  {
                      name : 'Ganam Cinemas',
                      rating : '3 / 5',
                      showing : 'Shajahanum Pareekuttiyum',
                      place: 'Valarkkavu, Thrissur',
                      image : 'images/theatre/thumb/ganam.jpg'
                  },
                  {
                      name : 'Karali',
                      rating : '3.8 / 5',
                      showing : 'Kasaba',
                      place: 'Round North, Thrissur',
                      image : 'images/theatre/thumb/kairali.jpg'
                  },
                  {
                      name : 'Sree',
                      rating : '3.8 / 5',
                      showing : 'Shajahanum Pareekuttiyum',
                      place: 'Round North',
                      image : 'images/theatre/thumb/kairali.jpg'
                  },
                  {
                      name : 'Girija',
                      rating : '2.5 / 5',
                      showing : 'Karinkunnam 6s',
                      place: 'Patturaykkal, Thrissur',
                      image : 'images/theatre/thumb/girija.jpg'
                  },
                  {
                      name : 'Jos',
                      rating : '2.5 / 5',
                      showing : 'Sulthan',
                      place: 'Round South, Thrissur',
                      image : 'images/theatre/thumb/jos.jpg'
                  },
                  {
                      name : 'Sapna',
                      rating : '2.5 / 5',
                      showing : 'Great Grand Masti',
                      place: 'Round East, Thrissur',
                      image : 'images/theatre/thumb/sapna.jpg'
                  },
                  {
                      name : 'Ramdas',
                      rating : '2.5 / 5',
                      showing : 'Anuraga Karikkin Vellam',
                      place: 'MG Road, Thrissur',
                      image : 'images/theatre/thumb/ramdas.jpg'
                  },
                  {
                      name : 'Ravikrishna',
                      rating : '2.5 / 5',
                      showing : 'Happy Wedding',
                      place: 'MG Road, Thrissur',
                      image : 'images/theatre/thumb/ravikrishna.jpg'
                  },
              ]
          }

      }

  );