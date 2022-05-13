

        $(document).ready(function(){
          var buttonClass = "blank"
          var fullJokeList = [];
          var jokeFilter = ["jokes"];
          var jokeList = filterByProperty(fullJokeList, jokeFilter);

          if($(window).width() <= 600) {
              $('.mainLogo').attr('src','images/JLogo.png');
              } else {
              $('.mainLogo').attr('src','images/jokessslogo.png');
            };

// Get joke data

var fullJokeList;
	$.ajax({
	  type: "GET",
    url: "jokesss.csv",
    dataType: "text",
	  success: function(response)
	  {		fullJokeList = $.csv.toArrays(response);

    }

	   });

//Responsive Design

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      $('img',x.a).toggle()
    } else {
      x.className = "topnav";
    }
  }

  $( window ).resize(function() {
    if($(window).width() <= 600) {
        $('.mainLogo').attr('src','images/JLogo.png');
        } else {
        $('.mainLogo').attr('src','images/jokessslogo.png');
      };
    });


  //Sort Buttons
            $('button').click(function(){

              if(this.value=="sort") {
              //toggle appearance
              $(this).toggleClass('button-sort button-sort-off');

              //replace image
              $('img',this).toggle();

              //update jokeFilter

              var filterIndex = $.inArray(this.id, jokeFilter);

              if(filterIndex==-1){
                jokeFilter.push(this.id);
              }  else{
                jokeFilter.splice(filterIndex, 1);
              }
            }


              var jokeList = filterByProperty(fullJokeList, jokeFilter);


            });


            // Next Jokes

                        $(".Generate").click(function(){
                          var jokeList = filterByProperty(fullJokeList, jokeFilter);
                          var jokeNum = Math.floor(Math.random() * jokeList.length);



                          var formatNum = checkEmpty(jokeList[jokeNum]);
                          //longformat / one liner joke
                          if (formatNum == 2) {
                            var joke1 = jokeList[jokeNum][1]

                            if (joke1.length >= 85) {
                              console.log(joke1.length);
                              $("#joke1").html("<p>" + joke1 + "</p>");
                              $("#joke1").attr("class", "longform");
                              $("#answer1").html("<p>" + "</p>");
                            }else {
                                $("#joke1").html("<p>" + joke1 + "</p>");
                                $("#answer1").html("<p>" + "</p>");
                                $("#joke1").removeClass("longform");

                              }


                          };
                          // Question / Answer
                          if (formatNum == 3) {
                            var joke1 = jokeList[jokeNum][1]
                            var answer1 = jokeList[jokeNum][2]
                            $("#joke1").html("<p>" + joke1 + "</p>");
                            $("#joke1").removeClass("longform");
                            $("#answer1").html("<p>" + answer1 + "</p>");
                          };

                          //Back and forth (knock knock)
                          if (formatNum >= 4) {
                            var joke1 = jokeList[jokeNum][1]
                            var answer1 = jokeList[jokeNum][2]
                            var displayjoke = "<p>" + joke1 + "</b>" + answer1 + "</p>" ;
                            $("#joke1").html("<p>" + joke1 + "</p>");
                            $("#joke1").removeClass("longform");
                            $("#answer1").html("<p>" + answer1 + "</p>");
                          };



                          });
        });







        //sliding navbar

                $(function(){
                    $('.icon').click(function(){
                        $('.sliding-navbar').toggleClass('sliding-navbar--open');
                      //  $('.mask').toggleClass('show');
                        $('.mask').fadeIn(1000);
                        //$('.mask').css('z-index', 200);
                        //$('.mask').css('opacity', .25);
                        $('.hamburger').toggleClass('menu-opened');
                    });

                    $('.mask').click(function(){
                        $('.sliding-navbar').toggleClass('sliding-navbar--open');
                        $('.mask').fadeOut();
                      //  $('.mask').delay(0.8s).css('z-index', -100);

                        $('.hamburger').toggleClass('menu-opened');
                    })
                });

// filter
                function filterByProperty(array, array2){
                    var filtered = [];
                    for (var j = 0; j < array2.length; j++){
                      for(var i = 0; i < array.length; i++){
                      if (array[i][0]== array2[j]){
                        filtered.push(array[i])

                      }

                    }
                  }
                    return filtered;

                }

// check empties

                function checkEmpty(array){
                    var newLength = 0;

                      for(var i = 0; i < array.length; i++){
                      if (array[i].length > 0) {
                        newLength = newLength+1;
                      }
                      }
                        return newLength;

                    }
