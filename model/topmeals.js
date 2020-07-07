//Harmanpreet kaur
//ID- 103725198

const pro=
{

fakedb:[],

inDb()
{
    this.fakedb.push({
        image:"tarmind.jpg",
        title:"Tarmind",
        price:"$3.95"

    })
    this.fakedb.push({
        image:"dosa.jpg",
        title:"Masala Dosa",
        price:"11.85"

    })
    this.fakedb.push({
        image:"Idli.jpg",
        title:"Idli Sambar",
        price:"4.46"

    })
    this.fakedb.push({
        image:"vada.jpg",
        title:"Vada",
        price:"$9.55"

    })
},

getAllpro(){

    return this.fakedb;
},



}

pro.inDb();
module.exports = pro;
