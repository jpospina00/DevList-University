import Device from './device.model.js';
import DeviceStatus from './deviceStatus.model.js';
import DeviceType from './deviceType.model.js';
import Stock from './stock.model.js';
import Warehouse from './warehouse.model.js';

DeviceType.hasMany(Device, { foreignKey: 'deviceTypeId' });
Device.belongsTo(DeviceType, { foreignKey: 'deviceTypeId' });

DeviceType.hasMany(Stock, { foreignKey: 'deviceTypeId' });
Stock.belongsTo(DeviceType, { foreignKey: 'deviceTypeId' });

Warehouse.hasMany(Device, { foreignKey: 'warehouseId' });
Device.belongsTo(Warehouse, { foreignKey: 'warehouseId' });

DeviceStatus.hasMany(Device, { foreignKey: 'statusId' });
Device.belongsTo(DeviceStatus, { foreignKey: 'statusId' });