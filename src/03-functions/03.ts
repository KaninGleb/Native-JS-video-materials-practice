import {StudentType} from "../02-objects/02.ts";
import {CityType, GovernmentBuildingType, HousesType} from "../02-objects/02_02.ts";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staff: number) => {
    building.staffCount -= staff;
}

export const toHireStaff = (building: GovernmentBuildingType, staff: number) => {
    building.staffCount += staff;
}

export function createMessage(city: CityType) {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men!`
}