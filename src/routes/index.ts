import {DeviceGroupsController} from '../model/controller/DeviceGroupsController';
import {LanbMapsCoorController} from '../model/controller/LanbMapsCoorController';
import {LbCfgController} from '../model/controller/LbCfgController';
import {MapDevicesController} from '../model/controller/MapDevicesController';
import {MapDeviceTreeController} from '../model/controller/MapDeviceTreeController';

const routes: any[] = [
    {
        method: 'get',
        route: '/DeviceGroups',
        controller: DeviceGroupsController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/lanbmapscoor',
        controller: LanbMapsCoorController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/lbcfg',
        controller: LbCfgController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/mapdevices',
        controller: MapDevicesController,
        action: 'all',
    },
    {
        method: 'get',
        route: '/mapdevicestree',
        controller: MapDeviceTreeController,
        action: 'all',
    },
//     {
//     method: 'post',
//     route: '/users',
//     controller: UserController,
//     action: 'save'
// }, {
//     method: 'delete',
//     route: '/users',
//     controller: UserController,
//     action: 'remove'
// }, {
//     method: 'get',
//     route: '/photos',
//     controller: PhotoController,
//     action: 'all'
// }
];

export default routes;
