//Controller
        var starApp = angular.module('starApp', ['ngRoute']);
        starApp.controller('StarCtrl', ['$scope', function ($scope) {
            $scope.maxRating = 5;
            $scope.ratedBy = 3;
            $scope.rateBy = function (star) {
                $scope.ratedBy = star;
            }
        }]);


//index controller
starApp.controller('index',function($scope,filmsdata){
      
      $scope.fim = filmsdata.getfims();
      
      
  });

//films controller
starApp.controller('gra',function($scope,$routeParams,filmsdata){
    
    $scope.fimid = $routeParams.fid;
    
    $scope.fim = filmsdata.getfims();
    $scope.myfilms = [];
    $scope.getselectedfim = function(id)
    {
        for(var i = 0 ; i < $scope.fim.length ; i++)
            {
                if($scope.fim[i].id == id)
                    {
                        $scope.myfilms = $scope.fim[i].info[0];
                    }
            }
    }
    $scope.getselectedfim($scope.fimid)
    
      
  });

starApp.controller("select",function($scope,filmsdata,$routeParams){
     $scope.fim = filmsdata.getfims();
    $scope.fimid = $routeParams.fid;
     $scope.myfilms = [];
    $scope.getselectedfim = function(id)
    {
        for(var i = 0 ; i < $scope.fim.length ; i++)
            {
                if($scope.fim[i].id == id)
                    {
                        $scope.myfilms = $scope.fim[i].info[0];
                    }
            }
    }
    $scope.getselectedfim($scope.fimid)
    
    
});


starApp.controller("select1",function($scope,filmsdata,$routeParams){
     $scope.fim = filmsdata.getfims();
    $scope.fimid = $routeParams.fid;
     $scope.myfilms = [];
    $scope.getselectedfim = function(id)
    {
        for(var i = 0 ; i < $scope.fim.length ; i++)
            {
                if($scope.fim[i].id == id)
                    {
                        $scope.myfilms = $scope.fim[i].info[0];
                    }
            }
    }
    $scope.getselectedfim($scope.fimid)
    
    
});

starApp.controller("select2",function($scope,filmsdata,$routeParams){
     $scope.fim = filmsdata.getfims();
    $scope.fimid = $routeParams.fid;
     $scope.myfilms = [];
    $scope.getselectedfim = function(id)
    {
        for(var i = 0 ; i < $scope.fim.length ; i++)
            {
                if($scope.fim[i].id == id)
                    {
                        $scope.myfilms = $scope.fim[i].info[0];
                    }
            }
    }
    $scope.getselectedfim($scope.fimid)
    
    
});


starApp.controller("select3",function($scope,filmsdata,$routeParams){
     $scope.fim = filmsdata.getfims();
    $scope.fimid = $routeParams.fid;
     $scope.myfilms = [];
    $scope.getselectedfim = function(id)
    {
        for(var i = 0 ; i < $scope.fim.length ; i++)
            {
                if($scope.fim[i].id == id)
                    {
                        $scope.myfilms = $scope.fim[i].info[0];
                    }
            }
    }
    $scope.getselectedfim($scope.fimid)
    
    
});

starApp.controller("select4",function($scope,filmsdata,$routeParams){
     $scope.fim = filmsdata.getfims();
    $scope.fimid = $routeParams.fid;
     $scope.myfilms = [];
    $scope.getselectedfim = function(id)
    {
        for(var i = 0 ; i < $scope.fim.length ; i++)
            {
                if($scope.fim[i].id == id)
                    {
                        $scope.myfilms = $scope.fim[i].info[0];
                    }
            }
    }
    $scope.getselectedfim($scope.fimid)
    
    
});

starApp.controller("regestration",function(){
    
});




starApp.config(function($routeProvider){
  $routeProvider.when('/',{
      templateUrl:'home.html',
      controller:'index'
  }).when('/#myslider',{
      templateUrl:'index.html',
      controller:'index'
  }).when('/gravity/:fid',{
      templateUrl:'gravity.html',
      controller:'gra'
  }).when('/gravity/:fid/select',{
      templateUrl:'select.html',
      controller:'select'
  }).when('/gravity/:fid/select1',{
      templateUrl:'select1.html',
      controller:'select1'
  }).when('/gravity/:fid/select2',{
      templateUrl:'select2.html',
      controller:'select2'
  }).when('/gravity/:fid/select3',{
      templateUrl:'select3.html',
      controller:'select3'
  }).when('/gravity/:fid/select4',{
      templateUrl:'select4.html',
      controller:'select4'
  }).when('/regestration',{
      templateUrl:'regestration.html',
      controller:'regestration'
  }).when('/about',{
      templateUrl:'about.html',
      controller:'regestration'
  }).when('/contact',{
      templateUrl:'contact.html',
      controller:'regestration'
  });
$routeProvider.otherwise({ redirectTo:'/'})
});
  


starApp.factory('filmsdata',function(){
    var factory={};
    var fim = [{id:1,name:"Gravity (2013)",imgsrc:"img/gravity.jpg",delay:"91 min",type:"Drama",
                info:[
                   {
                       id:1,name:"Gravity (2013)",imgsrc:"img/gravity.jpg",delay:"91 min",type:"Drama",actor:"Sandra Bullock ,George Clooney,Ed Harris,Phaldut Sharma,Amy Warren,Basher Savage",director:"Alfonso Cuarón",plot:"Dr. Ryan Stone (Bullock), a biomedical engineer from Lake Zurich, Illinois, is aboard the NASA Space Shuttle Explorer for her first space mission, STS-157. Veteran astronaut Matt Kowalski (Clooney) is commanding his final mission. During a spacewalk to service the Hubble Space Telescope, Mission Control in Houston warns the team about a Russian missile strike on a defunct satellite",
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                       
                       
                       
                   }
               ]},
                 {id:2,name:"The Hobbit: The Desolation of Smaug (2013)",imgsrc:"img/thehobbit.jpg",delay:"91 min",type:"romancy",
                 info:[
                     {
                         id:2,name:"The Hobbit: The Desolation of Smaug (2013)",imgsrc:"img/thehobbit.jpg",delay:"91 min",type:"romancy",actor:"Martin Freeman,Ian McKellen,Richard Armitage,Benedict Cumberbatch,Evangeline Lilly",director:"Peter Jackson",plot:"Thorin and his company are being pursued by Azog and his Orc party following the events of the previous film. They are ushered along by Gandalf to the nearby home of Beorn, a skin-changer who can take the form of the bear. That night, Azog is summoned to Dol Guldur by the Necromancer, who commands him to marshal his forces for war. Azog then delegates the hunt for Thorin to his son Bolg. The following day.",
                         
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                     }
                 ]},
                 {id:3,name:"The Hunger Games: Catching Fire (2013)",imgsrc:"img/hangergame.jpg",delay:"169 min",type:"Fantasy",
                 info:[
                     {
                         id:3,name:"The Hunger Games: Catching Fire (2013)",imgsrc:"img/hangergame.jpg",delay:"169 min",type:"Fantasy",actor:"Jennifer Lawrence,Josh Hutcherson,Liam Hemsworth,Woody Harrelson ,Elizabeth Banks,Lenny Kravitz,Philip Seymour Hoffman",director:"Francis Lawrence",plot:"After winning the 74th Hunger Games, Katniss Everdeen and Peeta Mellark return home to District 12, where President Snow visits Katniss. Snow explains that her actions in the Games have inspired rebellions. He orders her to use the upcoming victory tour to convince people that her actions were out of love for Peeta, not defiance against the Capitol  Haymitch's place.",
                         
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                     }
                 ]},
                 {id:4,name:"Thor: The Dark World (2013)",imgsrc:"img/thor.jpg",delay:"146 min",type:"action",
                 info:[
                     {
                         id:4,name:"Thor: The Dark World (2013)",imgsrc:"img/thor.jpg",delay:"146 min",type:"action",actor:"Chris Hemsworth,Natalie Portman,Tom Hiddleston,Anthony Hopkins ,Stellan Skarsgård,Idris Elba ",director:"Alan Taylor",plot:"Eons ago, Bor, father of Odin, clashes with the Dark Elf Malekith, who seeks to unleash a weapon known as the Aether on the nine realms. After conquering Malekith's forces, including enhanced warriors called the Kursed, on their home world of Svartalfheim, Bor safeguards the Aether within a stone column. Unbeknownst to Bor, Malekith, his lieutenant Algrim, and a handful of Dark Elves escape into suspended animation.In present-day Asgard, Loki stands imprisoned for his war crimes on Earth",
                         
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                     }
                 ]},
                 {id:5,name:"World War Z (2013)",imgsrc:"img/worldwar.jpg",delay:"112 min",type:"action",
                 info:[
                     {
                         id:5,name:"World War Z (2013)",imgsrc:"img/worldwar.jpg",delay:"112 min",type:"action",actor:"Brad Pitt,Mireille Enos ,Daniella Kertesz,James Badge Dale ,Matthew Fox",director:"Marc Forster",plot:"Former UN employee Gerry Lane, his wife Karin and their two daughters are in heavy Philadelphia traffic when the city is attacked by zombies. As chaos spreads, the Lanes escape to Newark, New Jersey and take refuge in an apartment, home to a couple with a young son, Tommy. UN Deputy Secretary-General Thierry Umutoni—an old friend of Gerry's—sends a helicopter that extracts .",
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                     }
                 ]},
                 {id:6,name:"Prisoners (2013)",imgsrc:"img/prisoners.jpg",delay:"116 min",type:"horror",
                 info:[
                     {
                         id:6,name:"Prisoners (2013)",imgsrc:"img/prisoners.jpg",delay:"116 min",type:"horror",actor:"Hugh Jackman ,Jake Gyllenhaal,Viola Davis,Maria Bello ,Terrence Howard ,Melissa Leo",director:"Denis Villeneuve",plot:"In rural Pennsylvania, Keller Dover (Hugh Jackman), his wife Grace, their teenage son Ralph and young daughter Anna attend a Thanksgiving dinner at the home of their friends, Franklin and Nancy Birch, their teenage daughter Eliza and young daughter Joy. The four children go for a walk in the neighborhood and approach an RV that is parked outside a house nearby. There is music playing, which suggests there is somebody inside. After dinner, Anna and Joy go missing.Detective Loki (Jake Gyllenhaal) is informed and starts a search. He locates the RV, which ",
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                         
                     }
                 ]},
                 {id:7,name:"This Is the End (2013)",imgsrc:"img/this_is_the_end.jpg",delay:"91 min",type:"Drama",
                 info:[
                     {
                         id:7,name:"This Is the End (2013)",imgsrc:"img/this_is_the_end.jpg",delay:"91 min",type:"Drama",actor:"Jay Baruchel,Seth Rogen,Craig Robinson,Danny McBride,James Franco,Jonah Hill,Emma Watson,Kevin Hart,Paul Rudd,Rihanna",director:"Seth Rogen,Evan Goldberg",plot:"Jay Baruchel arrives in Los Angeles to visit old friend and fellow actor Seth Rogen, who invites him to attend a housewarming party hosted by James Franco. Baruchel is uncomfortable at the crowded party, so Rogen accompanies him to a convenience store for cigarettes, but beams of blue light come down and suck numerous people into the sky. Rogen and Baruchel flee back to Franco's house, where an earthquake strikes and the party goers rush outside. Michael Cera tries to tell everyone that his.",
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                     }
                 ]},
                 {id:8,name:"The Internship (2013)",imgsrc:"img/internship.jpg",delay:"112 min",type:"comedy",
                 info:[
                     {
                         id:8,name:"The Internship (2013)",imgsrc:"img/internship.jpg",delay:"112 min",type:"comedy",actor:"Vince Vaughn,Owen Wilson ,Josh Brener,Dylan O'BrienTiya Sircar ,Tobit Raphael ,Rose Byrne",director:"Shawn Levy",plot:"Salesmen Billy McMahon (Vince Vaughn) and Nick Campbell's (Owen Wilson) employer goes out of business, and Billy applies for Google internships on their behalf. They are accepted due to their unorthodox interview answers, despite a lack of relevant experience. They are the only interns not of traditional collegiate age. abilities.",
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                     }
                 ]},
                 {id:9,name:"Dunkirk  (2017)",imgsrc:"img/film7.jpg",delay:"169 min",type:"Drama",
                 info:[
                     {
                         id:9,name:"Dunkirk  (2017)",imgsrc:"img/film7.jpg",delay:"169 min",type:"Drama",actor:"Tom Hardy,  Kenneth Branagh,Mark Rylance,Cillian Murphy,Harry Styles,James D'Arcy",director:"Christopher Nolan",plot:"Three different perspectives with overlapping time periods: one week on land, one day at sea, and one hour in the air, create a non-linear narrative.An introductory text says that in 1940, after the invasion of France, hundreds of thousands of Allied soldiers had retreated to Dunkirk. As German forces close in, they await evacuation in a seemingly hopeless situation",
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                     }
                 ]},
                 {id:10,name:"Inhumans  (2017)",imgsrc:"img/film8.jpg",delay:"112 min",type:"ation",
                 info:[
                     {
                         id:10,name:"Inhumans  (2017)",imgsrc:"img/film8.jpg",delay:"112 min",type:"ation",actor:"Eme Ikwuakor,Mike Moh,Sonya Balmores,Ken Leung,Isabelle Cornish,Iwan Rheon ",director:" Roel Reiné",plot:"Three different perspectives with overlapping time periods: one week on land, one day at sea, and one hour in the air, create a non-linear narrative.An introductory text says that in 1940, after the invasion of France, hundreds of thousands of Allied soldiers had retreated to Dunkirk. As German forces close in, they await evacuation in a seemingly hopeless situation",
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                     }
                     
                     
                 ]},
                 {id:11,name:"Annabelle: Creation  (2017)",imgsrc:"img/film9.jpg",delay:"169 min",type:"horror",
                 info:[
                     {
                         id:11,name:"Annabelle: Creation  (2017)",imgsrc:"img/film9.jpg",delay:"169 min",type:"Drama",actor:" Stephanie Sigman,Miranda Otto,Alicia Vela-Bailey,Philippa Coulthard,Talitha Bateman,Lulu Wilson  ",director:"  David F. Sandberg",plot:"In 1943, dollmaker Samuel Mullins and his wife Esther grieve for the loss of their seven-year-old daughter Annabelle, Bee, who died after she was run over by a passing car. An unknown entity, which the couple believes to be their daughter's spirit, convinces them to transfer its essence into one of Samuel's crafted porcelain dolls. Their elation soon turns to anguish when",
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                     }
                 ]},
                 {id:12,name:"The Hitman's Bodyguard (2017)",imgsrc:"img/film10.jpg",delay:"112 min",type:"drama",
                 info:[
                     {
                         id:12,name:"The Hitman's Bodyguard (2017)",imgsrc:"img/film10.jpg",delay:"112 min",type:"horror",actor:" Ryan Reynolds,Samuel L. Jackson,Gary Oldman,Salma Hayek,Elodie Yung,Sam Hazeldine ",director:" Patrick Hughes",plot:"Bodyguard Michael Bryce is hired to protect Takashi Kurosawa, a Japanese arms dealer. All apparently goes well, until Kurosawa is shot in the head at the last minute. Two years later, Bryce has fallen into disgrace and ekes out a living protecting drug-addicted corporate executives. Meanwhile, Vladislav Dukhovic.",
                       sat:"12:45AM - 06:45PM - 09:45PM",sun:"12:45PM",mon:"01:00PM - 03:30PM",tus:"01:00PM",win:"01:00PM - 03:30PM",thr:"-",fri:"09:30PM",
                       
                       sat1:"10:15AM - 01:00PM",sun1:"12:45PM - 03:30PM - 12:30AM",mon1:"09:30PM",tus1:"-",win1:"01:00PM - 03:30PM",thr1:"-",fri1:"-",
                       
                       sat2:"-",sun2:"12:45PM",mon2:"01:00PM - 03:30PM - 09:30PM",tus2:"09:30PM - 06:30PM",win2:"01:00PM - 03:30PM",thr2:"12:30AM",fri2:"12:30AM - 09:30PM",
                       
                       sat3:"12:45AM - 06:45PM - 09:45PM",sun3:"-",mon3:"01:00PM - 03:30PM - 09:30PM",tus3:"-",win3:"01:00PM - 03:30PM",thr3:"01:00PM - 03:30PM",fri3:"03:30PM - 12:30AM - 09:30PM",
                       
                       sat4:"12:45AM - 01:00PM",sun4:"12:45PM - 06:30PM - 09:30PM",mon4:"01:00PM",tus4:"01:00PM - 03:30PM - 09:30PM - 06:30PM",win4:"01:00PM - 03:30PM",thr4:"-",fri4:"03:30PM - 12:30AM - 09:30PM",
                       
                       times:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","04 tues 01:00PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 09:30PM"],
                       
                       
                       
                       times1:["01 sat 10:15AM ","01 sat 06:45PM","01 sat 09:45PM","02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","05 wed 01:00PM","05 wed 03:30PM"],
                       
                       times2:["02 sun 12:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","04 tues 09:30PM","04 tues 06:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 12:30AM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times3:["01 sat 12:45AM","01 sat 06:45PM","01 sat 09:45PM","03 mon 01:00PM","03 mon 03:30PM","03 mon 09:30PM","05 wed 01:00PM","05 wed 03:30PM","06 thurs 01:00PM","07 fri 09:30PM","07 fri 12:30AM"],
                       
                       times4:["01 sat 12:45AM","01 sat 01:00PM","02 sun 12:45PM","02 sun 06:30PM","02 sun 09:30PM","04 tues 01:00PM","04 tues 03:30PM","04 tues 09:30PM","05 wed 01:00PM","05 wed 03:30PM","07 fri 03:30PM","07 fri 09:30PM"]
                     }
                 ]}
              ];
    factory.getfims = function()
    {
        return fim;
    }
    return factory;
})







  
