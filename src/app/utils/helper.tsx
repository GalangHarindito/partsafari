import moment from "moment";

export const formatDate = (date: string) => {
    return moment(date).utcOffset(0).format('YYYY/MM/DD HH:mm')
}