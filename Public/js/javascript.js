// Feature descriptions for larger viewports
var longFreshTomatoesDescription = `
                <a href="https://github.com/ChrisAshton/Full-Stack-Nanodegree/tree/master/Project-1-Submission">
                  <span class="shortDescription" style="text-decoration:underline">
                    Fresh Tomatoes!
                  </span><br>
                  <span style="font-size:0.7em" class="additionalDescription">
                    A place where you can bookmark your favorite movies!
                  </span>
                </a>`;

var longGitEnvironmentDescription = `
                <a href="https://github.com/ChrisAshton/git_environment_configs">
                  <span class="shortDescription" style="text-decoration:underline">
                    A Perfect Git Environment
                  </span><br>
                  <span style="font-size:0.7em" class="additionalDescription">
                    Makes your bash environment beautiful with
                    <em>
                      completions!
                    </em>
                  </span>
                </a>`;

var longSpaAppDescription = `
                <a href="https://github.com/ChrisAshton/Sadona-Salon-and-Spa-iOS-App-">
                  <span class="shortDescription" style="text-decoration:underline">
                    Sadona Salon + Spa App
                  </span><br>
                  <span style="font-size:0.7em" class="additionalDescription">
                    Helps Sadona's amazing staff stay on top of business!
                  </span>
                </a>`;

// Feature descriptions for smaller viewports
var shortFreshTomatoesDescription = `
                <a href="https://github.com/ChrisAshton/Full-Stack-Nanodegree/tree/master/Project-1-Submission">
                  <span class="shortDescription" style="text-decoration:underline">
                    Fresh Tomatoes!
                  </span>
                </a>`;

var shortGitEnvironmentDescription= `
                <a href="https://github.com/ChrisAshton/git_environment_configs">
                  <span class="shortDescription" style="text-decoration:underline">
                    A Perfect Git Environment
                  </span>
                </a>`;

var shortSpaAppDescription = `
                <a href="https://github.com/ChrisAshton/Sadona-Salon-and-Spa-iOS-App-">
                  <span class="shortDescription" style="text-decoration:underline">
                    Sadona Salon + Spa App
                  </span>
                </a>`;

// Detect viewport width and adjust feature descriptions for size
function changeFeatureDescriptions() {
  var viewportSize = $(window).width();
  if (viewportSize < 451) {
    makeSmallFeatureDescription();
  }

  if (viewportSize > 450) {
    makeLargeFeatureDescription();
  }
}

// Populate descriptions for medium to large viewports
function makeLargeFeatureDescription() {
  $("#freshTomatoesDescription").html(longFreshTomatoesDescription);
  $("#perfectGitDescription").html(longGitEnvironmentDescription);
  $("#spaAppDescription").html(longSpaAppDescription);
}

// Populate Descriptions for small viewports
function makeSmallFeatureDescription() {
  $("#freshTomatoesDescription").html(shortFreshTomatoesDescription);
  $("#perfectGitDescription").html(shortGitEnvironmentDescription);
  $("#spaAppDescription").html(shortSpaAppDescription);
}

// Neo!
function adjustTopPicture() {
  var windowSize = $(window).width();
  if (windowSize < 720 && windowSize > 561) {
    $("#matrix-code").attr('src', 'img/neo_in_matrix.png');
    $("#matrix-code").attr('alt', 'Neo in the Matrix');
  } else {
    $("#matrix-code").attr('src', 'img/matrix-code.jpg');
    $("#matrix-code").attr('alt', 'Matrix code');
  }
}
