import dayjs from "dayjs";

export interface IBooking{
  name: string;              
  email: string;             
  phone: string;             
  date: dayjs.Dayjs;         
  time: dayjs.Dayjs;        
  people: number;          
  branch: string;          
  note?: string;           
}
