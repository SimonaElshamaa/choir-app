/* eslint-disable no-unreachable */
export const FIRST_PREP_SATURDAY = 2;
export const SECOND_PREP_SATURDAY = 3;
export const FIRST_PRIMARY_SUNDAY = 4;
export const SECOND_PRIMARY_SUNDAY = 5;
export const SECONDRY_MONDAY = 6;
export const YOUTH_TUESDAY = 7;
export const YOUTH_WEDNESDAY = 8;
export const KIDS_WEDNESDAY = 9;

export const getGroupName =(groupNumber)=>{
    switch(groupNumber){
        case FIRST_PREP_SATURDAY:
            return 'First Prep Saturday';
            break;
        case SECOND_PREP_SATURDAY:
            return 'Secound Prep Saturday';
            break;
        case FIRST_PRIMARY_SUNDAY:
            return 'First Primary Sunday';
            break;
        case SECOND_PRIMARY_SUNDAY:
            return 'Second Primary Sunday';
            break;
        case SECONDRY_MONDAY:
            return 'Secondry Monday';
            break;
        case YOUTH_TUESDAY:
            return 'Youth Tuesday';
            break;
        case YOUTH_WEDNESDAY:
            return 'Youth Wednesday';
            break;
        case KIDS_WEDNESDAY:
            return 'Kids Wednesday';
            break;
        default:
            return null;
    }
}