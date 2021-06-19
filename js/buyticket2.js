let buttonTicketThree = document.getElementById('ticketqvadrat3_cn')
let buttonTicketFour = document.getElementById('ticketqvadrat4_cn')


buttonTicketThree.addEventListener('click', function() {
  swal({
  title: "Купить билет",
  buttons: {
    cancel: "Отмена",
    confirm:"Купить"
  }
})
.then((val) => {
  if (val) {
    swal({
      title: "Спасибо за покупку!"
    })
  }
})
})

buttonTicketFour.addEventListener('click', function() {
  swal({
  title: "Купить билет",
  buttons: {
    cancel: "Отмена",
    confirm:"Купить"
  }
})
.then((val) => {
  if (val) {
    swal({
      title: "Спасибо за покупку!"
    })
  }
})
})
