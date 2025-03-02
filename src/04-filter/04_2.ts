import {CityType, GovernmentBuildingType} from '../02-objects/02_02.ts';

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street);
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingType>, num: number) {
    return buildings.filter(b => b.staffCount > num)
}