import {GovernmentBuildingType, HousesType} from '../02-objects/02_02.ts';

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(b => b.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(h => h.address.street.title);
}

export const createMessages = (houses: Array<HousesType>) => {
    return houses.map(h => `Hello guys from ${h.address.street.title}!`)
}