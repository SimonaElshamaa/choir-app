/* eslint-disable no-unreachable */
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