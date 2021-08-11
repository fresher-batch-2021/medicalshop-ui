$("#header").load("header.html");

function displayitems() {
  let Items= [
    {orderId: "#1",ProductName:"Nivea",Price:120,PaymentDetails:"Mode:UPI,Total:120",DeliveryAddress:"4th,Northstreet,chennai-620998",Deliverystatus:"OutForDelivery",DeliverdDate:"soon"},
    {orderId:"#2",ProductName:"Vicks",Price:80,PaymentDetails:"Mode:cashondelivery,Total:80",DeliveryAddress:"4th,Northstreet,chennai-620998",Deliverystatus:"Arriving",DeliverdDate:"soon"},
    {orderId:"#3",ProductName:"Dettol",Price:27,PaymentDetails:"Mode:UPI,Total:27",DeliveryAddress:"4th,weststreet,chennai-620998",Deliverystatus:"OutForDelivery",DeliverdDate:"soon"},
    {orderId:"#4",ProductName:"Volini",Price:87,PaymentDetails:"Mode:card,Total:87",DeliveryAddress:"4th,Northstreet,chennai-620998",Deliverystatus:"Delivered",DeliverdDate:"08/08/2021"}
  ];

  let content = "";
  for (let order of Items) {
    content =
      content +
      "<tr><td>" + order.orderId + "</td><td>" + order.ProductName + "</td><td>" + order.PaymentDetails+ "</td><td>"+ order.DeliveryAddress+ "</td><td>"+order.Deliverystatus+ "</td><td>"+order.DeliverdDate+ "</td><td>";
  }
  console.log(content);

  var total=0;
  for (let i = 0; i < Items.length; i++)
   {
      total += Items[i].Price;
   }
   content+="<tr><td colspan='2'>AmountPaid </td><td>Rs." + total + "</td></tr>";
  console.log(total);
  document.querySelector("#cart-table").innerHTML = content;
}
displayitems();