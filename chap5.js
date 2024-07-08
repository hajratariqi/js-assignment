// question 1
var num1 = 5
var num2 = 3
var addition = num1 + num2
document.write('Sum of ' + num1 + ' and '+ num2 + ' is ' + addition +'<br>')

var subtrackNum = 5
var subtrackNum2 = 3
var subtracktion = subtrackNum % subtrackNum2
document.write('Sum of ' + subtrackNum + ' and '+ subtrackNum2 + ' is ' + subtracktion ,'<br> <br>')


// question2
var incrementNum = 

document.write('the value after declaration is ',incrementNum, '<br>')
incrementNum = 5 

document.write('initial value is ', incrementNum, '<br>')

incrementNum++
document.write('after increment is ', incrementNum, '<br>')

var addition = incrementNum + incrementNum
addition++
document.write('value after addition is ',addition, '<br>')
addition--
document.write('value after decrement is ' ,addition , '<br>')

var remainder = addition % incrementNum
document.write('The remainder is ' , remainder , '<br> <br>')


// question 3
var ticketPrice = 600
var buyTicket = 5 
var calculateTicket = ticketPrice * buyTicket
document.write('total cost to buying ',  buyTicket ,' tickets to a movie is ', calculateTicket, '<br> <br> <br>')

// question 4

var tableNum = 4
var num = 1
document.write(tableNum + ' x ' +  num + ' = ' + tableNum*num, '<br>' )

document.write(tableNum + ' x ' +  ++num + ' = ' + tableNum*num, '<br>' )
document.write(tableNum + ' x ' +  ++num + ' = ' + tableNum*num, '<br>' )

document.write(tableNum + ' x ' +  ++num + ' = ' + tableNum*num, '<br>' )

document.write(tableNum + ' x ' +  ++num + ' = ' + tableNum*num, '<br>' )

document.write(tableNum + ' x ' +  ++num + ' = ' + tableNum*num, '<br>' )

document.write(tableNum + ' x ' +  ++num + ' = ' + tableNum*num, '<br>' )

document.write(tableNum + ' x ' +  ++num + ' = ' + tableNum*num, '<br>' )

document.write(tableNum + ' x ' +  ++num + ' = ' + tableNum*num, '<br>' )

document.write(tableNum + ' x ' +  ++num + ' = ' + tableNum*num, '<br> <br> ' )


// question 5
var itemOnePrice = 650
var itemOneQuantity = 3

var ItemTwoPrice = 100
var itemTwoQuantity = 7

var shippingCharges = 100

document.write('Price of item 1 is ', itemOnePrice, '<br>',
    'Quantity of item 1 is ' , itemOneQuantity , '<br>',
    'price of item 2 is ',ItemTwoPrice ,'<br>',
    'Quantity of item 2 is ', itemTwoQuantity , '<br>',
    'Shipping Charges is ' , shippingCharges , '<br>',
)
document.write('Total Cost' ,'<br> <br><br><br> ' )

// question 6
var udt = 10;
var oneUsdToPkr = 104.80;
var saudiCurrency = 25;
var oneSaudiCurrencyToPkr = 28;
var total  = udt*oneUsdToPkr + saudiCurrency*oneSaudiCurrencyToPkr
document.write('total currency is ', total, '<br> <br> <br>')

// question 7
var sumNum = 5
document.write(sumNum*10/2)