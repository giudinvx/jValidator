//      jValidator.js
//      
//      Copyright 2011 Giuseppe D'Inverno <giudinvx[at]gmail[dot]com>
//
//      This program is free software; you can redistribute it and/or modify
//      it under the terms of the GNU General Public License as published by
//      the Free Software Foundation; either version 2 of the License, or
//      (at your option) any later version.
//      
//      This program is distributed in the hope that it will be useful,
//      but WITHOUT ANY WARRANTY; without even the implied warranty of
//      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//      GNU General Public License for more details.
//      
//      You should have received a copy of the GNU General Public License
//      along with this program; if not, write to the Free Software
//      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
//      MA 02110-1301, USA.


String.prototype.isIp = function () {
	var ipRegex = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/i;
	var ipTrue = this.match(ipRegex);
	
	if (ipTrue) { 
		return true;
	} else {
		return false
	}
};

String.prototype.isMac = function () {
	var macCheck = /([[:xdigit:]]{2}:){5}[[:xdigit:]]{2}/i;
	var macTrue = this.match(macCheck);
	
	if (macTrue) {
		return true;
	} else {
		return false;
	}
};

String.prototype.isEmail = function () {
	var emailRegex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/i;
	var emailTrue = this.match(emailRegex);
	
	if (emailTrue) {
		return true;
	} else {
		return false;
	}
};


String.prototype.isUrl = function () {
	var urlRegex = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)([A-Z0-9][A-Z0-9_-]*(?:\.[A-Z0-9][A-Z0-9_-]*)+):?(\d+)?\/?/i;
	var urlTrue = this.match(urlRegex);
	
	if (urlTrue) {
		return true;
	} else {
		return false;
	}
};

String.prototype.isIban = function () {
	var ibanRegex = /[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/i;
	var ibanTrue = this.match(ibanRegex);
	
	if (ibanTrue) {
		return true;
	} else {
		return false;
	}
};

String.prototype.isBic = function () {
	var bicRegex = /([a-zA-Z]{4}[a-zA-Z]{2}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?)/i;
	var bicTrue = this.match(bicRegex);
	
	if (bicTrue) {
		return true;
	} else {
		return false;
	}
};

String.prototype.isZipcode = function () {
	var zipcodeRegex = /^[0-9]{5}(-[0-9]{4})?$/i;
	var zipcodeTrue = this.match(zipcodeRegex);
	
	if (zipcodeTrue) {
		return true;
	} else {
		return false;
	}
};

String.prototype.isTime = function () { 
	var timeRegex = /^([1-9]|1[0-2]):[0-5]\d(:[0-5]\d(\.\d{1,3})?)?$/i;
	var timeTrue = this.match(timeRegex);
	
	if (timeTrue) {
		return true;
	} else {
		return false;
	}
}
