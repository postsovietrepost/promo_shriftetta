let buttonTicketOne = document.getElementById('ticketqvadrat1_cn')
let buttonTicketTwo = document.getElementById('ticketqvadrat2cn')


buttonTicketOne.addEventListener('click', function() {
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

buttonTicketTwo.addEventListener('click', function() {
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
