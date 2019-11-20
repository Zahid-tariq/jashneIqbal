var rWorldUrlServer = "https://world.rekhta.org";
//var siteUrl = "http://10.60.10.6/jer2019/";
var siteUrl = "https://jashnerekhta.org/";
//var siteUrl = 'http://898.1b9.myftpupload.com/';

jQuery(document).ready(function(){

    jQuery('.bannerSliderWrap').bxSlider({
        auto: true,
        autoHover: true,
        infiniteLoop: false,
        controls: true,
        touchEnabled: true
  });
    try {
        jQuery("#mobile").intlTelInput({
          autoPlaceholder: false,
    
          numberType: "MOBILE",
    
          preferredCountries: ["in"],
          separateDialCode: true,
          utilsScript: "https://jashnerekhta.org/wp-content/themes/jer/assets/js/utils.js"
        });
      } catch (e) {}

try {
  jQuery('.submitBtn').click(function(){

  registerDataSubmit();

  });
} catch (error) {
  
}

// data-dial-code="355" data-country-code="al"

// jQuery('.country-list li[data-dial-code="93"]').click();


// jQuery(document).on('click', '.countryField .select-items div', function () {
jQuery('.countryField .select-items div').on('click', function () {
  var countryName  = jQuery('.countryField .select-selected').text().trim();
  countryName = countryName.replace(/ /g,'');
  //alert(countryName);
  // jQuery('.mobileFieldInput .country-list .country').each(function(index, value){
  //   var countryCodeText = jQuery(this).find('.country-name').text();
  //   var countryCodeArr = countryCodeText.split(' ');
  //   var countryCode = countryCodeArr[0];
    
  //       if(countryName == countryCode){
  //       var cCode = jQuery(this).attr('data-country-code');
  //       console.log(cCode);

  //       jQuery('#mobile').intlTelInput("setCountry", cCode);
  //       }
  //       })

  var cCode = jQuery('.countryCodeWithAlis').find('.'+countryName).attr('data-isoCode');


        jQuery('#mobile').intlTelInput("setCountry", cCode);
    
})
// jQuery('#mobile').intlTelInput("setCountry", 'dz');



try {
  jQuery(".registrationNotification").on("focus",".regform input[type='text'],.regform input[type='email']",function () {
    jQuery(this).parent('.formField').find('.placeHolder').show();
    jQuery(this).parent('.formField').find('.placeHolder').addClass('placeHolderActive');
    jQuery(this).parent('.formField').find('.regError').hide();
    jQuery(this).parent('.formField').find('.regErrorInvalid').hide();


  });

  jQuery(".registrationNotification").on("blur",".regform input[type='text'],.regform input[type='email']",function () {

    if (jQuery(this).val()==''){
      jQuery(this).parent('.formField').find('.placeHolder').removeClass('placeHolderActive');
    }
    


    


  });



} catch (error) {
  
}


jQuery('.fieldradioBtn').on('change','input',function(){

if(jQuery('.locationField input:checked').parent().text().trim() == 'India'){
jQuery('.countryField').hide();
jQuery('.stateField').show();
}
else{
  jQuery('.stateField').hide();
  jQuery('.countryField').show();
}

});

jQuery('.select-selected').click(function(){
  jQuery('.regError').hide();
});

jQuery('.mobileFieldInput input').click(function(){
  jQuery('.regError').hide();
  jQuery('.regErrorInvalid').hide();
});

jQuery('#dobField').click(function(){
  jQuery('.regError').hide();
  jQuery('.regErrorInvalid').hide();
  jQuery('.regErrorInvldFtrDt').hide();
});

// Nav Click

jQuery(".navBtnClick").click(function () {
  var the_id = jQuery(this).children('a').attr('data-id');
  var posScroll = jQuery('#'+the_id).offset().top - 0;
  jQuery("html, body").animate({
      scrollTop: posScroll
    },
    1000
  );

  return false;
});

// Register Btn Click

jQuery(".registerSectionNavBtn").click(function () {
  var the_id = "#registrationNotification";
  var posScroll = jQuery(the_id).offset().top - 0;
  jQuery("html, body").animate({
      scrollTop: posScroll
    },
    1000
  );

  return false;
});

// Register Page :



// Logo Btn Click

jQuery(".logo").click(function () {
  jQuery("html, body").animate({
      scrollTop: 0
    },
    1000
  );

  return false;
});

 // Scroll Function
 jQuery(window).on("scroll", function () {
  var currentScroll = jQuery(window).scrollTop();

  if (currentScroll > 0) {
    jQuery("#header").addClass("fixHeader");
  } else {
    jQuery("#header").removeClass("fixHeader");
  }
});


jQuery('.select-items div').on('click', function () {
  jQuery(this).parent().prev().addClass('slcActv');

});


/* terms popup */


jQuery(".jerTermConBtn").on("click", function (e) {
  e.preventDefault();
  jQuery("body").addClass("overFlowHidden");
  jQuery(".overlay").show();
  jQuery(".termConPopup").show();
});

jQuery(".overlay,.termConPopupClose").on("click", function () {
  jQuery("body").removeClass("overFlowHidden");
  jQuery(".overlay").hide();
  jQuery(".termConPopup").hide();
});



/* add occupation option */
jQuery('.occupationFieldInput .select-items div').on('click',function(){
  var ocVl = jQuery(this).text();
  console.log(ocVl);
  if(ocVl == 'Self Employed'){
    jQuery('.retContainer').hide();
    jQuery('.priJobContainer').hide();
    jQuery('.selfEmployField').fadeIn();
  }
  else if(ocVl == 'Private Job'){
    jQuery('.selfEmployField').hide();
    jQuery('.retContainer').hide();
    jQuery('.priJobContainer').fadeIn();
  }
  else if(ocVl == 'Retired'){
    jQuery('.selfEmployField').hide();
    jQuery('.priJobContainer').hide();
    jQuery('.retContainer').fadeIn();
  }
  else{
    jQuery('.selfEmployField').hide();
    jQuery('.priJobContainer').hide();
    jQuery('.retContainer').hide();
  }

});

try {
  jQuery(document).on("click", ".galleryItems", function (event) {
    event.preventDefault();
    jQuery(this).lightboxgallery({
      showCounter: true
    });
  });
} catch (e) {}

jQuery(".videoListing").on('click', '.videoListItem', function () {
  //alert("sadfsadf");
  var videoIds = jQuery(this).attr("data-videoid");
  var videoTitle = jQuery(this).find('h3').text();
  jQuery('.videoDesc h3').text(videoTitle);
  // pause highlight video
  
  loadVideo(videoIds); //pYWNM291bng
  jQuery('.videoListItem i').show();
  jQuery('.videoListItem span').css('display','none');
  jQuery(this).children('i').hide();
  jQuery(this).children('span').css('display','block');
  
  //loadYouTubeApi(loadGalleryVideo);
  jQuery(".svgLoader").show();
  try {
    setTimeout(function () {
      jQuery(".videoTumb").remove();
      jQuery(".videoContainer .screenLoader").hide();
    }, 1000);
  } catch (e) {}




});

// Youtube API Get Playlist : For Gallery
try {
  youtubejerplaylist();

   

} catch (error) {}

/*
   * You tube Video ID
   */

  jQuery(document).on("click",'.videoContainer .videoTumb,.videoContainer i',function () {
      jQuery(".svgLoader").show();
      defaultVideoId = jQuery('.videoListing .videoListItem').first().attr('data-videoid');
      loadVideo(defaultVideoId);

      jQuery('.videoListing .videoListItem').first().children('i').hide();
      jQuery('.videoListing .videoListItem').first().children('span').css('display','block');

      try {
        setTimeout(function () {
          jQuery(".videoTumb").remove();
          jQuery(".videoContainer .svgLoader").hide();
        }, 1000);
      } catch (e) {}
    }
  );


  //scrollVideoIndexing();


});


// Select Box Custom Script:
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


// Date Picker

jQuery(function () {
  "use strict";

  var $date = jQuery(".docs-date");
  var $container = jQuery(".docs-datepicker-container");
  var $trigger = jQuery(".docs-datepicker-trigger");
  var options = {
    show: function (e) {
      //console.log(e.type, e.namespace);
      //jQuery('.datepicker-container').removeClass('datepicker-hide');
    },
    hide: function (e) {
      //console.log(e.type, e.namespace);
    },
    pick: function (e) {
      jQuery(".dateField .vRFPlaceHolder").addClass("vRFPlaceHolderLabel");
      //hide();
      //jQuery('.datepicker-container').addClass('datepicker-hide');
      //console.log(e.type, e.namespace, e.view);
    }
  };

  $date
    .on({
      "show.datepicker": function (e) {
        console.log(e.type, e.namespace);
      },
      "hide.datepicker": function (e) {
        console.log(e.type, e.namespace);
      },
      "pick.datepicker": function (e) {
        console.log(e.type, e.namespace, e.view);
      }
    })
    .datepicker(options);

  jQuery(".docs-options, .docs-toggles").on("change", function (e) {
    var target = e.target;
    var $target = $(target);
    var name = $target.attr("name");
    var value = target.type === "checkbox" ? target.checked : $target.val();
    var $optionContainer;

    switch (name) {
      case "container":
        if (value) {
          value = $container;
          $container.show();
        } else {
          $container.hide();
        }

        break;

      case "trigger":
        if (value) {
          value = $trigger;
          $trigger.prop("disabled", false);
        } else {
          $trigger.prop("disabled", true);
        }

        break;

      case "inline":
        $optionContainer = jQuery('input[name="container"]');

        if (!$optionContainer.prop("checked")) {
          $optionContainer.click();
        }

        break;

      case "language":
        jQuery('input[name="format"]').val(
          $.fn.datepicker.languages[value].format
        );
        break;
    }

    options[name] = value;
    $date
      .datepicker("reset")
      .datepicker("destroy")
      .datepicker(options);
  });

  jQuery(".docs-actions").on("click", "button", function (e) {
    var data = jQuery(this).data();
    var args = data.arguments || [];
    var result;

    e.stopPropagation();

    if (data.method) {
      if (data.source) {
        $date.datepicker(data.method, $(data.source).val());
      } else {
        result = $date.datepicker(data.method, args[0], args[1], args[2]);

        if (result && data.target) {
          jQuery(data.target).val(result);
        }
      }
    }
  });

  jQuery('[data-toggle="datepicker"]').datepicker();
});


function registerDataSubmit(){

var name = '';
var email = '';
var location = '';
var state = '';
var country = '';
var city = '';
var mobile = '';
var mobileCountryCode = +91;
var dob = '';
var age = '';
var gemder = '';
var occupation = '';
var selfEmploy = '';
var companyName = '';
var jobTitle = '';
var retJobtitle = '';
var retCompany = '';
var organization = '';
var designation = '';
var attendJer = '';
var tandC = 0;
var OtherPeopleList = [];
  
name = jQuery('#name').val().trim();
email  = jQuery('#email').val().trim();
location  = jQuery('.locationField input:checked').parent().text().trim();
state  = jQuery('.stateField .select-selected').text().trim();
country  = jQuery('.countryField .select-selected').text().trim();
city  = jQuery('#city').val().trim();  
mobile  = jQuery('#mobile').val().trim();
mobileCountryCode  = jQuery('.selected-dial-code').text().trim();
dob = jQuery("#dobField").val();
age  = jQuery('.dateFieldInput .select-selected').text().trim();
gemder  = jQuery('.genderField .select-selected').text().trim();
occupation  = jQuery('.occupationField .select-selected').text().trim();  
selfEmploy  = jQuery('.selfEmployFieldInput .select-selected').text().trim(); 
companyName  = jQuery('#company').val().trim(); 
jobTitle  = jQuery('#companyTitle').val().trim(); 
retJobtitle  = jQuery('#retcompanyTitle').val().trim(); 
retCompany  = jQuery('#retCompany').val().trim(); 
attendJer  = jQuery('.attendJERField input:checked').parent().text().trim();
if (jQuery(".tandCField input[type=checkbox]").is(":checked")){
  tandC = 1;
}
else{
  tandC = 0;
}

if (name == "" || name == null) {
  jQuery('.nameField .placeHolder').hide();
  jQuery('.nameField .regError').show();
  window.scrollTo(0, jQuery("#name").offset().top - 70);
  return false;
}
else if(!validateaplha(name)){
  jQuery('.nameField .placeHolder').hide();
  jQuery('.nameField .regErrorInvalid').show();
  window.scrollTo(0, jQuery("#name").offset().top - 70);
  return false;
}
else{

}

if (email == "" || email == null) {
  jQuery('.emailField .placeHolder').hide();
  jQuery('.emailField .regError').show();
  window.scrollTo(0, jQuery("#email").offset().top - 70);
  return false;
}
else if(!validateEmail(email)){
  jQuery('.emailField .placeHolder').hide();
  jQuery('.emailField .regErrorInvalid').show();
  window.scrollTo(0, jQuery("#email").offset().top - 70);
  return false;
}
else{

}

if(location == 'India'){
if (state == "" || state == null || state == 'state*') {
  jQuery('.stateField .regError').show();
  window.scrollTo(0, jQuery(".stateField").offset().top - 70);
  return false;
}
else{

}
country = 'India';


}
else{
  if (country == "" || country == null || country == 'country*') {
    jQuery('.countryField .regError').show();
    window.scrollTo(0, jQuery(".countryField").offset().top - 70);
    return false;
  }
  else{
  
  }
  state = '';


}



if (city == "" || city == null) {
  jQuery('.cityField .placeHolder').hide();
  jQuery('.cityField .regError').show();
  window.scrollTo(0, jQuery("#city").offset().top - 70);
  return false;
}
else if(!validateaplha(city)){
  jQuery('.cityField .placeHolder').hide();
  jQuery('.cityField .regErrorInvalid').show();
  window.scrollTo(0, jQuery("#city").offset().top - 70);
  return false;
}
else{

}

if (mobile == "" || mobile == null) {
  jQuery('.mobileField .placeHolder').hide();
  jQuery('.mobileField .regError').show();
  window.scrollTo(0, jQuery("#mobile").offset().top - 70);
  return false;
}
else if(!validateMobile(mobile) || mobile.length < 6 || mobile.length > 20){
  jQuery('.mobileField .placeHolder').hide();
  jQuery('.mobileField .regErrorInvalid').show();
  window.scrollTo(0, jQuery("#mobile").offset().top - 70);
  return false;
}
else{

}

// if (dob == "" || dob == null) {
//   jQuery('.dateFieldInput .regError').show();
//   window.scrollTo(0, jQuery(".genderField").offset().top - 70);
//   return false;
// }
// else if (dob >= Date.now) {
//   jQuery('.dateFieldInput .regError').show();
//   window.scrollTo(0, jQuery(".genderField").offset().top - 70);
//   return false;
// }
// else{
//   jQuery('.dateFieldInput .regError').hide();
// }


// if (dob.length != 0) {
//   var date = new Date();
//   var birthDate = new Date(dob);
//   var diffDays = date_diff_indays(birthDate, date);

//   if (diffDays < 0) {
//     jQuery('.dateFieldInput .regErrorInvldFtrDt').show();
//     window.scrollTo(0, jQuery(".genderField").offset().top - 70);
//       return false;
//   }
// }


if (age == "" || age == null || age == 'Select Option') {
  jQuery('.dateFieldInput .regError').show();
  window.scrollTo(0, jQuery(".dateFieldInput").offset().top - 70);
  return false;
}
else{
    jQuery('.dateFieldInput .regError').hide();
   }


if (gemder == "" || gemder == null || gemder == 'Select Option') {
  jQuery('.genderField .regError').show();
  window.scrollTo(0, jQuery(".genderField").offset().top - 70);
  return false;
}
else{

}

if (occupation == "" || occupation == null || occupation == 'Select Option') {
  jQuery('.occupationField .regError').show();
  window.scrollTo(0, jQuery(".occupationField").offset().top - 70);
  return false;
}
else if(occupation == 'Self Employed'){

  if (selfEmploy == "" || selfEmploy == null || selfEmploy == 'Select Option') {
    jQuery('.selfEmployField .regError').show();
    window.scrollTo(0, jQuery(".selfEmployField").offset().top - 70);
    return false;
  }
  else{

  }
}
else if(occupation == 'Private Job'){

  if (companyName == "" || companyName == null) {
    jQuery('.priCompanyName .regError').show();
    window.scrollTo(0, jQuery("#company").offset().top - 70);
    return false;
  }
  else{

  }

  if (jobTitle == "" || jobTitle == null) {
    jQuery('.prijobtitle .regError').show();
    window.scrollTo(0, jQuery("#companyTitle").offset().top - 70);
    return false;
  }
  else{

  }



}

else{

}

if(occupation == 'Private Job'){
  organization = companyName;
  designation = jobTitle;
}
else if(occupation == 'Retired'){
  organization = retCompany;
  designation = retJobtitle;
}
else{
  organization = '';
  designation = '';
}
if(!(occupation == 'Self Employed')){
  selfEmploy = '';
}




if(tandC == 0){
  jQuery('.tandCField .regError').show();
  window.scrollTo(0, jQuery(".occupationField").offset().top - 70);
  return false;
}
else{

}

jQuery('.submitBtn').css('pointer-events','none');
jQuery('.loader').show();


jQuery
    .post(
      rWorldUrlServer + "/api/ApiJERRegistration/CreateRegistration", {
        Name: name,
        Email: email,
        CountryCode: mobileCountryCode,
        Mobile: mobile,
        Age: age,
        Sex: gemder,
        City: city,
        Occupation: occupation,
        SelfEmpType:selfEmploy,
        Organization: organization,
        Designation: designation,
        IsAttendBefore: attendJer,
        ReferenceType: '',
        EventType: 10,
        SourceRef: '',
        CampaignId: '',
        People: OtherPeopleList,
        DOB:'',
        Country:country,
        State:state
      },
      function (data) {
        if (data != null && data != undefined) {
          if (data.Result == "success") {
          jQuery('.loader').hide();
           jQuery('.regform').hide();
           jQuery('.thanksMsg').show();
           jQuery('html, body').animate({
            scrollTop: jQuery('.thanksMsg').offset().top - 50
          }, 1000);
          } else {
            
          }
        } else {
          
        }
      }
    )
    .fail(function () {
     
    });




  }


  function validateEmail(sEmail) {
    var filter = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (filter.test(sEmail)) {
      return true;
    } else {
      return false;
    }
  }

  
function validateMobile(phone) {
  var filter = /^[0-9]*$/;
  if (filter.test(phone)) {
    return true;
  } else {
    return false;
  }
}

function validateMobilePlus(phone) {
  var filter = /^[0-9+]*$/;
  if (filter.test(phone)) {
    return true;
  } else {
    return false;
  }
}

function validateaplha(aplha) {
  var filter = /^[a-zA-Z. ]*$/;
  if (filter.test(aplha)) {
    return true;
  } else {
    return false;
  }
}

function validatesomeSpecialChar(speChar) {
  var filter = /^[a-zA-Z./&-_(,) ]*$/;
  if (filter.test(speChar)) {
    return true;
  } else {
    return false;
  }
}


var date_diff_indays = function (date1, date2) {
  dt1 = new Date(date1);
  dt2 = new Date(date2);
  return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
}



// screen.orientation.lock("portrait-primary");

/*
 * You Tube Api
 */

try {
  function loadYouTubeApi() {
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement("script");

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.

  var player;
  var videoId;
  var defaultVideoId;

  var currentPlayer;

  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      rel: 0,
      videoId: 'qySUxQkXLNs-HYPM',
      //videoId: defaultVideoId,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });

   
  }

  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {
    if (event.target.h.id === currentPlayer) {
      console.log(currentPlayer, event.target);
      event.target.playVideo();
    }
    //console.log(event);
    // currentPlayer.playVideo();
    // event.target.playVideo();
  }

  // 5. The API calls this function when the player's state changes.
  //    The function indicates that when playing a video (state=1),
  //    the player should play for six seconds and then stop.
  var done = false;

  function onPlayerStateChange(playerStatus) {
    var stat;
    // if (playerStatus == -1) {
    // stat = "unstarted"; // unstarted = gray
    // } else
    if (playerStatus.data <= 0) {
      stat = "ended"; // ended = yellow
      // jQuery(".videoContainer .videoTumb,.videoContainer i").css(
      //   "display",
      //   "block"
      // );
      //  loadVideo("7XpA13I7t8g");
    } else if (playerStatus.data == 1) {
      stat = "playing"; // playing = green
      if (currentPlayer == "player") {
        jQuery(".videoContainer .videoTumb,.videoContainer i").css(
          "display",
          "none"
        );
      }
      jQuery(".svgLoader").hide();
    } else if (playerStatus.data == 2) {
      stat = "paused"; // paused = red

      //jQuery('.videoContainer .videoTumb,.videoContainer i').css('display','block');
    }
    // else if (playerStatus == 3) {
    // stat = "buffering"; // buffering = purple
    // } else if (playerStatus == 5) {
    // stat = "videocued"; // video cued = orange
    // }
  }

  function loadVideo(videoId) {
    currentPlayer = "player";
    if (player) {
      player.loadVideoById(videoId);
    } else {
      //setTimeout(loadVideo, 1000);
      videoId = defaultVideoId;
      loadYouTubeApi();
      //loadVideo(videoId);
    }
  }


 
} catch (e) {}

// Function for Youtube Playlist Append.
function youtubejerplaylist() {
  jQuery
    .get(
      "https://www.googleapis.com/youtube/v3/playlistItems", {
        order: "viewCount",
        part: "snippet,contentDetails",
        channelId: "UCsNi3yBwjL9KspadEnzRVdw",
        playlistId: "PLlLBDf5H0BEKe2JPuEeIl-WO7wbxL8zKt",
        maxResults: 50,
        //key: "AIzaSyCFiOoFSBKCFVC9fIPZm7FFm3KuAZ0rUGY"
        key:"AIzaSyAI6b927ZTgEaQ07QMNfN2mWJWVuCQBiw0",
      },
      function (data) {
        if (data != null && data != undefined) {
          //console.log(data);
          var videoList = "";
          for (var i = 0; i < data.items.length; i++) {
            if (data.items[i].contentDetails.videoId && data.items[i].snippet.thumbnails != undefined) {
              videoList +=
                '<div class="videoListItem clearfix" data-videoId="' +
                data.items[i].contentDetails.videoId +
                '"><img src="' +
                data.items[i].snippet.thumbnails.default.url +
                '" alt="' +
                data.items[i].snippet.title +
                '" title="' +
                data.items[i].snippet.title +
                '" /><div class="videoListDesc"><h3 title="' +
                data.items[i].snippet.title +
                '">' +
                data.items[i].snippet.title +
                "</h3></div><i></i><span>Now playing</span></div>";
            }
          }

          //console.log("videolist : " + videoList);
          jQuery(".videoListing").append(videoList);
        } else {
          console.log("Data undefined");
        }
      }
    )
    .fail(function () {
      console.log("Failed");
    });
}

jQuery(window).load(function(){
// Gallery Video First
defaultVideoId = jQuery('.videoListing .videoListItem').first().attr('data-videoid');
var defaulttitle = jQuery('.videoListing .videoListItem').first().find('h3').html();
 videoId = defaultVideoId;
var imgHtml ='<div class="videoTumb" style="background-image:url(https://img.youtube.com/vi/' +defaultVideoId+'/0.jpg)"><i></i></div>';
jQuery(".videoDesc h3").html(defaulttitle);
jQuery(".videoContainer").append(imgHtml); 

if(jQuery(window).width() > 1199){
  scrollVideoIndexing();  
}


try {
  var windowLocation = window.location.href;
  if (windowLocation.includes("ref")) {
    var winLocaArr = windowLocation.split("?");
    windowLocation = winLocaArr[0];
  } else {
    windowLocation = windowLocation;
  }
  if (
    windowLocation == siteUrl + "register/" ||
    windowLocation == siteUrl + "register"
  ) {
    
    var posScroll = jQuery("#registrationNotification").offset().top;

    jQuery("html, body").animate({
        scrollTop: posScroll
      },
      1000
    );

  }

  if (
    windowLocation == siteUrl + "schedule/" ||
    windowLocation == siteUrl + "schedule"
  ) {
    
    var posScroll = jQuery("#scheduleSection").offset().top;

    jQuery("html, body").animate({
        scrollTop: posScroll
      },
      1000
    );

    
  }


  if (windowLocation.includes("type=iframe")) {
    // var winLocaArr = windowLocation.split("?");
    // windowLocation = winLocaArr[0];
  jQuery('body').addClass('iframeRender');
  
  }



} catch (e) {}



});

function scrollVideoIndexing() {

  var totalEleWidth = 0;
  var videoIndexCategoryWidth = jQuery('.videoListing').width();
  var htmlNext = '<span class="nextVideoIndex rico-arrowthinright"></span>';
  var htmlPrev = '<span class="prevVideoIndex rico-arrowthinleft"></span>';
  jQuery('.videoListing .videoListItem').each(function () {
      totalEleWidth += jQuery(this).outerWidth();
  });
  if (totalEleWidth > videoIndexCategoryWidth) {
    jQuery('.videoSectionWrap').append(htmlNext);
    jQuery('.videoSectionWrap').append(htmlPrev);
  }


  jQuery('.nextVideoIndex').on('click', function () {
      var pICOffsetLeft = jQuery('.videoListing').scrollLeft();
      var scrollPosShifLeft = pICOffsetLeft + 300;
      //$('.poetIndexCategory').scrollLeft(scrollPosShifLeft);
      jQuery('.videoListing').animate({
          scrollLeft: scrollPosShifLeft
      }, 200);
  });

  jQuery('.prevVideoIndex').on('click', function () {
      var pICOffsetLeft = jQuery('.videoListing').scrollLeft();
      var scrollPosShifRight = pICOffsetLeft - 300;
      //$('.poetIndexCategory').scrollLeft(scrollPosShifRight);
      jQuery('.videoListing').animate({
          scrollLeft: scrollPosShifRight
      }, 200);




  });

}