/* eslint-disable no-unreachable */
import {
    FIRST_PREP_SATURDAY,
    SECOND_PREP_SATURDAY,
    FIRST_PRIMARY_SUNDAY,
    SECOND_PRIMARY_SUNDAY,
    SECONDRY_MONDAY,
    YOUTH_TUESDAY,
    YOUTH_WEDNESDAY,
    KIDS_WEDNESDAY,
} from "./groups";

export const ADMIN = 1;
export const SERVENT_FIRST_PREP_SATURDAY = 2;
export const SERVENT_SECOND_PREP_SATURDAY = 3;
export const SERVENT_FIRST_PRIMARY_SUNDAY = 4;
export const SERVENT_SECOND_PRIMARY_SUNDAY = 5;
export const SERVENT_SECONDRY_MONDAY = 6;
export const SERVENT_YOUTH_TUESDAY = 7;
export const SERVENT_YOUTH_WEDNESDAY = 8;
export const SERVENT_KIDS_WEDNESDAY = 9;

export const getRoleName =(roleNumber)=>{
    switch(roleNumber){
        case ADMIN:
            return 'Admin';
            break;
        case SERVENT_FIRST_PREP_SATURDAY:
            return 'Servent for first prep saturday';
            break;
        case SERVENT_SECOND_PREP_SATURDAY:
            return 'Servent for second prep saturday';
            break;
        case SERVENT_FIRST_PRIMARY_SUNDAY:
            return 'Servent for first primary sunday';
            break;
        case SERVENT_SECOND_PRIMARY_SUNDAY:
            return 'Servent for second primary sunday';
            break;
        case SERVENT_SECONDRY_MONDAY:
            return 'Servent for secondry monday';
            break;
        case SERVENT_YOUTH_TUESDAY:
            return 'Servent for youth tuesday';
            break;
        case SERVENT_YOUTH_WEDNESDAY:
            return 'Servent for youth wednesday';
            break;
        case SERVENT_KIDS_WEDNESDAY:
            return 'Servent for kids wednesday';
            break;
        default:
            return '';
    }
}

export const getRoleGroup =(roleNumber)=>{
    switch(roleNumber){
        case SERVENT_FIRST_PREP_SATURDAY:
            return FIRST_PREP_SATURDAY;
            break;
        case SERVENT_SECOND_PREP_SATURDAY:
            return SECOND_PREP_SATURDAY;
            break;
        case SERVENT_FIRST_PRIMARY_SUNDAY:
            return FIRST_PRIMARY_SUNDAY;
            break;
        case SERVENT_SECOND_PRIMARY_SUNDAY:
            return SECOND_PRIMARY_SUNDAY;
            break;
        case SERVENT_SECONDRY_MONDAY:
            return  SECONDRY_MONDAY;
            break;
        case SERVENT_YOUTH_TUESDAY:
            return YOUTH_TUESDAY;
            break;
        case SERVENT_YOUTH_WEDNESDAY:
            return YOUTH_WEDNESDAY;
            break;
        case SERVENT_KIDS_WEDNESDAY:
            return KIDS_WEDNESDAY;
            break;
        default:
            return null;
    }
}