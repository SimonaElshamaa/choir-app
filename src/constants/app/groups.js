/* eslint-disable no-unreachable */
export const MONDAY = 3;
export const TUESDAY = 4;
export const WEDNESDAY = 5;
export const THURSDAY = 6;
export const FRIDAY = 7;
export const SATURDAY = 1;
export const SUNDAY = 2;

export const getGroupName =(groupNumber)=>{
    switch(groupNumber){
        case MONDAY:
            return 'Monday';
            break;
        case TUESDAY:
            return 'Tuesday';
            break;
        case WEDNESDAY:
            return 'Wednesday';
            break;
        case THURSDAY:
            return 'Thursday';
            break;
        case SATURDAY:
            return 'Saturday';
            break;
        case SUNDAY:
            return 'Sunday';
            break;
        default:
            return null;
    }
}