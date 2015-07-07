/**
 * @fileoverview Base calendar controller
 * @author NHN Ent. FE Development Team <e0242@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var datetime = require('../datetime');

/**
 * @constructor
 * @mixes util.CustomEvents
 */
function Base() {
    /**
     * @type {object.<string, Event[]>} event collection grouped by dates.
     */
    this.dates = {};
}

/**********
 * CRUD
 **********/

// Create
/**
 * Create an event instance.
 * @param {object} options Data object to create event.
 * @return {Base} this
 */
Base.prototype.create = function(options) {
    var event = Event.create(options),
        ymd = datetime.format(event.starts, 'YYYYMMDD'),
        targetDate = this.dates[ymd];

    if (!targetDate) {
        targetDate = this.dates[ymd] = [];
    }

    targetDate.push(event);

    return this;
};

// Read

/**
 * @return {Collection} colllection with seached events.
 * TODO: inplements method
 */
Base.prototype.find = function() {
    return new Collection(this._getEventID);
};

/**
 * @param {Collection} collection from Base#find(). all of quering methods are except collection object for first argument.
 * @returns {array} result of query.
 * TODO: implememts method
 */
Base.prototype.getDateSchedule = function(collection) {
    return [];
};

// Update
Base.prototype.update = function() {};

// Delete
Base.prototype.delete = function() {};

/**********
 * API SYNC
 **********/

Base.prototype.sync = function() {};
Base.prototype.fetch = function(query) {};

// mixin
util.CustomEvents.mixin(Base);

module.exports = Base;

