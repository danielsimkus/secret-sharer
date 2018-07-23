parasails.registerPage('view', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  props: [ 'uuId' ],
  data: {
      heroHeightSet: false,
      formData: {
        key: '',
        uuId: this.uuId
      },
      formRules: {

      },
      formErrors: {

      },
      cloudError: '',
      syncing: false,
      key: '',
      url: '',
      complete: false
  },
  watch: {
    uuId(value) {
      this.formData.uuId = value;
    }
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function(){
    this._setHeroHeight();
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    submittedForm: function(secret) {
      /* Why is this so horrible? I must be doing something wrong! */
      this.secret = secret;
      this.complete = true;
      this.syncing = false;
    },

    // Private methods not tied to a particular DOM event are prefixed with _
    _setHeroHeight: function() {
      let $hero = this.$find('[full-page-hero]');
      let headerHeight = $('#page-header').outerHeight();
      let heightToSet = $(window).height();
      heightToSet = Math.max(heightToSet, 500);//« ensure min height of 500px - header height
      heightToSet = Math.min(heightToSet, 1000);//« ensure max height of 1000px - header height
      $hero.css('min-height', heightToSet - headerHeight+'px');
      this.heroHeightSet = true;
    },

    copy: function(objectId) {
      let el = document.getElementById(objectId);
      el.focus();
      el.setSelectionRange(0, el.value.length);
      document.execCommand('copy');
    }

  }
});
