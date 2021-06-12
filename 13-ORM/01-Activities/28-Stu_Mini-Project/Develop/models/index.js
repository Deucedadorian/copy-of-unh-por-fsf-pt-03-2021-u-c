const Traveller = require('./Travellers');
const Location = require('./Locations');
const Trip = require('./Trips');

Traveller.hasMany(Trip, {
  onDelete: 'NULL',
  foreignKey: 'traveller_id',
});

Trip.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

Location.hasMany(Trip, {
  foreignKey: 'location_id'
});

Trip.belongsTo(Location, {
  foreignKey: 'location_id',
});

module.exports = { Location, Trip, Traveller };
