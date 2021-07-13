function workout() {
    var total = document.getElementById('total').value;
    var service = document.getElementById('service').value;
    var people = document.getElementById('people_no').value;

    var amount = (total / people) * service;
    
    document.getElementById('amount').innerHTML = 'Tip Amount\n£ ' + amount + '\nEach';
}