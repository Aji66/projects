// document.getElementById('car').addEventListener('click', function() {
//     var myDiv = document.getElementById('cartd');
    
//     if (myDiv.style.display === 'none') {
//         myDiv.style.display = 'block';
//     } else {
//         myDiv.style.display = 'none';
//     }
// });

 
function offerclick(offer){
    document.getElementById("phone").style.display = "block"
    document.getElementById("co").textContent = `You have selected ${offer}.`   


}


function rest(){
    ip = document.getElementById('phone_number').value
   
    let users = [];

    if( ip.length == 10){
        let otp = Math.random()*(1011,9999)
        otp =Math.ceil(otp)
        console.log(otp)
        ip = Number(ip)
        console.log(ip,typeof(ip))
        console.log("---------")
            document.getElementById("code").innerHTML=otp
        users.push(ip,otp)
        
        console.log(users)
    
    
    }else{
        document.getElementById("code").innerHTML= "Please Enter a valid phone number (Without Country Code)"
    }
  

}





// cart //



function cartopen(){
    document.getElementById('cartd').style.display = 'block'

}


function cartclose(){
    document.getElementById("cartd").style.display = "none"
}




 
// ---------------------------total items ----------------------------------------------------------------------------------

const items1 ={
   "id " : "1",
    "itemname" : "Chicken Biriyani",
    "restaurent" : " Amma's Paradise",
    "price " : 200
 } 

 const items2 ={
   "id " : "2",

    "itemname" : " Alfahm",
    "restaurent" : " Paru's Kitchen",
    "price " : 400
 } 

 const items3 ={
   "id " : "3",
    "itemname" : "Mandhi",
    "restaurent" : " Nehadi Mandi",
    "price " : 600
 } 

 const items4 ={
   "id " : "4",
    "itemname" : "pani poori",
    "restaurent" : "  kolkatha charts&juice",
    "price " : 100
 } 


 const items5 ={
   "id " : "5",
    "itemname" : "masala dosa",
    "restaurent" : " Amma's Paradise",
    "price " : 70
 } 
 const items6 ={
   "id " : "6",
    "itemname" : "Fried chicken",
    "restaurent" : " KFC",
    "price " : 450
 } 

 const items7 ={
   "id " : "7",
    "itemname" : " Fried Rice",
    "restaurent" : "  Beijing Bites",
    "price " : 150
 } 

 const items8 =
 {
   "id " : "8",
    "itemname" : "Idly",
    "restaurent" : " A2B",
    "price " : 70
 } 

 const items9 ={
   "id " : "9",
    "itemname" : "Meals",
    "restaurent" : " Achayan's Cafe",
    "price " : 110
 } 

 const items10 ={
   "id " : "10",
    "itemname" : "Chicken Biriyani",
    "restaurent" : " Hotel Annapurneshwari",
    "price " : 80
 } 

 const items11 ={
   "id " : "11",
    "itemname" : "Chicken Noodles",
    "restaurent" : " Beijing Bites",
    "price " : 130
 } 

 const items12 ={
   "id " : "12",
    "itemname" : "Dosa",
    "restaurent" : " A2B",
    "price " : 50
 } 

 const items13 ={
   "id " : "13",
    "itemname" : "Pizza",
    "restaurent" : " Pizza Hut",
    "price " : 200
 } 

 const items14 ={
   "id " : "14",
    "itemname" : "Ramen",
    "restaurent" : " Beijing Bites",
    "price " : 160
 } 

 const items15 ={
   "id " : "15",
    "itemname" : "Shawarma",
    "restaurent" : " AL Taza ",
    "price " : 120
 } 

 const items16 ={
   "id " : "16",
    "itemname" : "Steak",
    "restaurent" : " The Black Pearl ",
    "price " : 1200
 } 

 const items17 ={
   "id " : "17",
    "itemname" : "Mutton Cury ",
    "restaurent" : " EDO Restaurent",
    "price " : 350
 } 

 const items18 ={
   "id " : "18",
    "itemname" : "Vada",
    "restaurent" : " Amma's Paradise",
    "price " : 30
 } 

 const items19 ={
   "id " : "19",
    "itemname" : "Pasta",
    "restaurent" : " The Green Path",
    "price " : 150
 } 


//  ==============================================================



// ============================Cart Actions=======================
//  function selectitm(){
    

//     console.log(item)
//     const crtspc = document.getElementById("itmnm1").innerHTML = items1.itemname
//  }

const cart = [];
let total =(0)
let count =(0)

        // function to add items to the cart


function addtocart(item,price,count){
   cart.push({item,price})
   total += price
   count +=1
   updatecart()
  
}


console.log(cart)

         // updating the cart UI


function updatecart(){
   const itemlist = document.getElementById("itemli")
   const cartbill = document.getElementById("totalamt")
   
   

   itemlist.innerHTML =""
   
  cart.forEach(rendering);


   function rendering(item) {
      const listitms = document.createElement("li")
      listitms.id ="cartlist"
      listitms.style.display = 'block',
      listitms.textContent = `${item.item} - ${item.price} /-  }`
      itemlist.appendChild(listitms)

      const cartlist =document.getElementById('cartlist')
       
     

      
   
      
      document.getElementById("amount").textContent = total

      if(item in cart){
         document.getElementById('itemcount').textContent  = count
      }
     
  }

}
         

