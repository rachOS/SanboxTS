import Lunch from "./Lunch";
import {FoodGroup} from "./FoodGroup"

type LunchType = {}
type FoodType = {}

export default class Day {
    constructor(public  lunch: Array<Lunch<LunchType, FoodGroup>> = []) { 
        this.lunch = lunch
    }
    
}