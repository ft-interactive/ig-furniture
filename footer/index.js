'use strict';

var mapCredits = function (source) {
  return source && source.name ? '<span class="ig-footer__credit">' + (source.link ? '<a href="' + source.link + '" target="_blank">' + source.name + '</a>' : source.name) + '</span>' : '';
};

var printList = function (prefix, list, suffix, separator) {
  return (!!prefix ? '<span class="ig-footer__prefix">' + prefix + '</span>' : '') + list.map(mapCredits).join(separator || ', ') + (suffix ?  '<span class="ig-footer__suffix">' + suffix + '</span>' : '');
};


var Footer = function (options) {
  this.el = options.el;

  this.credits = options.credits.filter(function (row) {
    return row && row.type === 'credit';
  });

  this.sources = options.credits.filter(function (row) {
    return row && row.type === 'source';
  });

  if (options.footnotes) {
    this.footnotes = options.footnotes;
    if (!Array.isArray(this.footnotes)) {
      this.footnotes = this.footnotes.toString().split(/[\r\n]+/);
    }
  } else options.footnotes = [];

  this.strings = {
    graphicType: 'Graphic'
  };
};

Footer.prototype.template = function () {
  var dom = '', footnotesDom = '';

  if (this.sources && this.sources.length) {
    dom += (
      '<span class="ig-footer__sources">' +
      printList('Source' + (this.sources.length > 1 ? 's' : '') + ': ', this.sources) +
      '&nbsp;</span>'
    );
  }

  if (this.credits && this.credits.length) {
    dom += (
      '<span class="ig-footer__credits">' +
      printList(this.strings.graphicType + ' by ', this.credits) +
      '</span>'
    );
  }
  
  if (this.footnotes && this.footnotes.length) {
    footnotesDom = '<div class="ig-footer__footnotes">' + this.footnotes.map(function(footnote) {
      return '<p>' + footnote + '</p>';
    }).join('') + '</div>';
  }

  return (
    footnotesDom +
    '<div class="ig-footer__sources-and-credits"><div>' +
    dom +
    '</div></div>'
  );
};

Footer.prototype.render = function () {
  this.el.innerHTML = this.template();
};

module.exports = Footer;
