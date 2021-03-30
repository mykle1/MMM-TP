/* Magic Mirror
 * Module: MMM-TP
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-TP",{

	defaults: {
			height:"",
			width:"",
			bgColor: "",
			textColor: "",
			fontSize: "",
      animationSpeed: "0",
      updateInterval: 60 * 60 * 1000,
	},

    start: function () {
		self = this;

    // Schedule update timer
    setInterval(function() {
    self.updateDom(self.config.animationSpeed || 0); // use config.animationSpeed or revert to zero
    }, this.config.updateInterval);

	},

	getStyles: function() {
        return ["MMM-TP.css"];
    },


	getDom: function() {

		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";

		iframe.src = "https://www.theworldcounts.com/embed/challenges/70?background_color="+this.config.bgColor+"&color="+this.config.textColor+"&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size="+this.config.fontSize+"";

		return iframe;

	},

});
