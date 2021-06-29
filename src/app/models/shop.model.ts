export class Shop {
    _id : String;
    shopServices : {_id : String , serviceName : String,servicePrice : number,isSelect : boolean | false}[];
    shopName : String;
    shopAddress : String;
    shopImage : String;
}
