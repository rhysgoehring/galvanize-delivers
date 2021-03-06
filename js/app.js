$(document).ready(function(){
  let cards = $('.card');
  let realSubTotal = 0;
  let totalCell = $('#tot')
  // console.log(cards);
  // let reciept = $($('tbody')[0]);
  // let total = $('#total');
  // console.log("total is" + total);

  cards.on('click', function(event){
    event.preventDefault();
    let selected= $(event.target).parent().parent();
    // console.log(event.target);
    // console.log(selected);
    let price = selected.find('.price').text();
    // console.log("price is", price)
    let priceInt = parseFloat(price.substring(1));
    console.log("price without $", priceInt);
    let item = selected.find('.card-title').text();
    // console.log(item);
    let cart= $($('tbody')[0]);
    // console.log(cart);
    let newCartRow = $('<tr class="newRow"></tr>');
    cart.prepend(newCartRow);
    let cartItem = $(`<td>${item}</td>`);
    let cartItemPrice = $(`<td class="item-price right-align ">${price}</td>`)
    newCartRow.prepend(cartItem, cartItemPrice);
    let subTotalCell = $('#sTotal')
    // console.log("subtotal is ", subTotalCell);
    let sumTotalItems = $($('.item-price')).text();
    // console.log("prices to be added are ", sumTotalItems);
    realSubTotal += priceInt;
    subTotalCell.text('');
    subTotalCell.append('$' + realSubTotal.toFixed(2));
    // console.log(realSubTotal);
    // console.log("subtotal is ", subTotalCell);
    // console.log(subTotalCell.text());
    let taxRate = 1.08;
    let totalCell = $('#tot')
    console.log("total cell is ", $('#tot'))
    let totalValue = (taxRate * realSubTotal).toFixed(2);
    totalCell.text('');
    totalCell.append('$' + totalValue);

    console.log("total value is ", totalValue)
  })

  $('#orderBtn').on('click', function(){
    let $name = $('#name');
    let $phoneNumber = $('#phoneNum');
    let $address = $('#address');
    if ($name.val().trim() === "") {
      Materialize.toast('Please enter your name.', 5000);
      return;
    }
    if ($phoneNumber.val().trim() === "") {
      Materialize.toast('Please enter your phone number.', 5000);
      return;
    }
    if ($address.val().trim() === "") {
      Materialize.toast('Please enter your address.', 5000);
      return;
    }

    Materialize.toast("Order Placed, Thank You!", 5000);
    $('#body').empty();


  })
});
