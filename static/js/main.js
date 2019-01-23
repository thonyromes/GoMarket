$(document).ready(() => {
  // let dropDown = $(".tm-sidebar-drop");
  // let caret = $(".tm-sidebar-caret");

  // $(dropDown).each((ind, val) => {
  //   $(val).click(() => {
  //     $(caret.not(caret[ind])).removeClass("ion-ios-arrow-down");
  //     $(caret.not(caret[ind])).addClass("ion-ios-arrow-back");
  //     $(caret[ind]).toggleClass("ion-ios-arrow-down");
  //     $(caret[ind]).toggleClass('ion-ios-arrow-back');
  //   });
  // });

  // $('.alert').alert();

  // BOOTSTRAP MODAL
  $('#modelId').on('show.bs.modal', event => {
    var button = $(event.relatedTarget);
    var modal = $(this);
    // Use above variables to manipulate the DOM

  });

  // SIDEBAR TOGGLER OBJECT
  const ToggleSidebar = {
    sidebar: $('.sidebar'),
    sidebarContent: $('.sidebar-content'),
    openSidebar: $('#open-sidebar'),
    closeSidebar: $('#close-sidebar'),

    toggleDisplay: () => {
      ToggleSidebar.sidebar.toggleClass('d-none');
      ToggleSidebar.sidebar.toggleClass('mw-100');
    },

    toggleAnimation: () => {
      ToggleSidebar.sidebarContent.toggleClass('slideOutLeft');
    }

  }

  $(ToggleSidebar.openSidebar).click((e) => {
    ToggleSidebar.toggleDisplay();
  });

  $(ToggleSidebar.sidebar).click((e) => {
    if ((e.target.classList.contains('sidebar')) || (e.target.classList.contains('close-sidebar'))) {
      ToggleSidebar.toggleAnimation();
      $(ToggleSidebar.sidebar).one("animationend", () => [ToggleSidebar.toggleDisplay(),
        ToggleSidebar.toggleAnimation()
      ]);
    }
  });

  // FAVOURITE STAR
  let star = $('.fav-icon > i');

  function resetStar() {
    $(star).addClass('ion-ios-star-outline');
    $(star).removeClass('ion-ios-star');
  }

  $(star).click(e => {
    resetStar();
    $(e.target).toggleClass('ion-ios-star-outline');
    $(e.target).toggleClass('ion-ios-star');

    $(e.target).prevAll().toggleClass('ion-ios-star-outline');
    $(e.target).prevAll().toggleClass('ion-ios-star');
  });

});

// CUSTOM SCROLLBAR
(function ($) {
  $(window).on("load", function () {
    $(".m-c-scrollbar").mCustomScrollbar({
      scrollButtons: {
        enable: true
      },
      theme: "dark-3"
    });
    $(".m-c-scrollbar-h").mCustomScrollbar({
      scrollButtons: {
        enable: true
      },
      setHeight: 380,
      theme: "dark"
    });
    $(".m-c-scrollbar-min").mCustomScrollbar({
      scrollButtons: {
        enable: false
      },
      theme: "minimal"
    });
    $(".m-c-scrollbar-min-h").mCustomScrollbar({
      scrollButtons: {
        enable: false
      },
      setHeight: 365,
      theme: "minimal"
    });
  });
})(jQuery);

// BOOTSTRAP TOOLTIP
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// CROPPER.JS
// const image = document.getElementById('crImage');
// const cropper = new Cropper(image, {
//   aspectRatio: 16 / 9,
//   crop(event) {
//     console.log(event.detail.x);
//     console.log(event.detail.y);
//     console.log(event.detail.width);
//     console.log(event.detail.height);
//     console.log(event.detail.rotate);
//     console.log(event.detail.scaleX);
//     console.log(event.detail.scaleY);
//   },
// });

// CKEDITOR

// CK 5
// ClassicEditor
// 		.create( document.querySelector( '#editor' ), {
// 			// toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
// 		} )
// 		.then( editor => {
// 			window.editor = editor;
// 		} )
// 		.catch( err => {
// 			console.error( err.stack );
// 		} );

// CK 4

if (document.getElementById('ckInput') !== undefined && document.getElementById('ckInput') !== null) {
  CKEDITOR.replace('ckInput');
}

// WOW REVEAL
new WOW().init();