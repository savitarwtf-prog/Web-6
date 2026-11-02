$(document).ready(function () {

  console.log("jQuery is ready!");

  $("#changeHeadline").click(function () {
    $("#headline").text("Aldiyar - krasavchik");
  });

  $("#changeGreeting").click(function () {
    $("#welcome").html("Welcome to <i>My jQuery</i> Portfolio");
  });

  $("#styleHeadline").click(function () {
    $("#headline").css("color", "green");
    $("p.intro").css({ "font-size": "20px", "background-color": "yellow" });
  });

  $("#darkBtn").click(function () {
    $("body").addClass("dark");
  });

  $("#lightBtn").click(function () {
    $("body").removeClass("dark");
  });

  $("#hideBtn").click(function () {
    $("#status, #facts").hide();
  });

  $("#showBtn").click(function () {
    $("#status, #facts").show();
  });

  $("#toggleBtn").click(function () {
    $("#status, #facts").toggle();
  });

  $("#fadeInBtn").click(function () {
    $("#img1").fadeIn();
    $("#img2").fadeIn("slow");
  });

  $("#fadeOutBtn").click(function () {
    $("#img1").fadeOut();
    $("#img2").fadeOut("slow");
  });

  $("#fadeToggleBtn").click(function () {
    $("#img1").fadeToggle();
    $("#img2").fadeToggle(1000);
  });

  $(".panel").hide();

  $(".heading").click(function () {
    $(this).next().slideToggle();
  });

  $("#slideUpBtn").click(function () {
    $(".panel").slideUp();
  });

  $("#slideDownBtn").click(function () {
    $(".panel").slideDown();
  });

  $("#addSkill").click(function () {
    var skill = $("#skillInput").val();
    if (skill.trim() === "") {
      $("#skillMsg").text("Please enter a skill.");
    } else {
      $("#skillList").append("<li>" + skill + "</li>");
      $("#skillInput").val("");
      $("#skillMsg").text("");
    }
  });

  $("#prependSkill").click(function () {
    var skill = $("#skillInput").val();
    if (skill.trim() === "") {
      $("#skillMsg").text("Please enter a skill.");
    } else {
      $("#skillList").prepend("<li>" + skill + "</li>");
      $("#skillInput").val("");
      $("#skillMsg").text("");
    }
  });

  $("#removeSkill").click(function () {
    $("#skillList li:last").remove();
  });

  $("#changeLink").click(function () {
    $("#myLink").attr("href", "https://www.linkedin.com");
    $("#myLink").text("LinkedIn");
  });

  $("#nameInput").keyup(function () {
    $("#outName").text($(this).val());
  });

  $("#emailInput").keyup(function () {
    $("#outEmail").text($(this).val());
  });

  var animated = false;

  $("#animateBtn").click(function () {
    if (animated === false) {
      $(".bar").each(function () {
        $(this).animate({ width: $(this).attr("data-level") }, 1000);
      });
      animated = true;
    } else {
      $(".bar").animate({ width: "0px" }, 1000);
      animated = false;
    }
  });

});
