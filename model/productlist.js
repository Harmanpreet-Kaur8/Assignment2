//Harmanpreet kaur
//ID- 103725198

const prod=
{

FakeDB:[],

inDB()
{
    this.FakeDB.push({
        image:"tarmindrice.jpg",
        title:"Tarmind Rice",
        price:"$27",
        fcat: "Rice served with Tarimd Chutney",
        num:"have 5 meals",
        top:true


    })
    this.FakeDB.push({
        image:"dosawrap.jpg",
        title:"Dosa Wrap",
        price:"$15",
        fcat:"Dosa served woth potatoes and specially made south chutneys",
        num:" have 2 meals",
        top:false

    })
    this.FakeDB.push({
        image:"idlisambar.jpg",
        title:"Idli Sambar",
        price:"$22",
        fcat:"Idli served with so famous gravy of south and coconut chutney",
        num:" have 3 meals",
        top:true



    })
    this.FakeDB.push({
        image:"AatukkariKuzhambu.jpg",
        title:"Aatukkari Kuzhambu with Steamed Rice.",
        price:"$16",
        fcat:"This is speciallity of our Restaurant",
        num:"have 2 meals",
        top:false

    })
},

getallprod(){

    return this.FakeDB;
},



}

prod.inDB();
module.exports = prod;