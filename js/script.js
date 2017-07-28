function check_memory(number)
{
    // Memory management
    var memory = document.getElementById('password').value.split("");
    var memory_index = memory.indexOf(number);
    if (memory_index > -1)
    {
        memory.splice(memory_index, 1);
        document.querySelector('[data-number="' + number + '"]').removeAttribute('data-active');
    }
    else
    {
        memory.push(number);
        document.querySelector('[data-number="' + number + '"]').setAttribute('data-active', '');
    }

    document.getElementById('password').value = memory.join("");
}

document.querySelectorAll('.cell').forEach(function(cell, index)
{
    cell.addEventListener('click', function(e)
    {
        var number = this.getAttribute('data-number');
        check_memory(number);
    });
});

document.getElementById('password').addEventListener('keyup', function(e)
{
    e.preventDefault();
    e.stopPropagation();

    var input = this.value.toUpperCase();
    var input_array = input.split("");
    var has_error = false;
    var duplicte = [];
    var map = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    document.querySelectorAll('.cell').forEach(function(item){
    	var number = item.getAttribute('data-number');
		if (input_array.indexOf(number) == -1)
		{
			item.removeAttribute('data-active');
		}
    });

    input_array.forEach(function(item, index)
    {
        if (has_error) return;

        var i = duplicte.indexOf(item);
        if (i > -1 || map.indexOf(item) == -1)
        {
            password.classList.add('error');
            has_error = true;
            return;
        }
        duplicte.push(item);
        document.querySelector('[data-number="' + item + '"]').setAttribute('data-active', '');
    });
    if (!has_error)
    {
        password.classList.remove('error');
    }
});

document.addEventListener('keyup', function(e)
{
    var map = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    var key = e.key.toUpperCase();
    var index = map.indexOf(key);

    var input = document.getElementById('password').value.toUpperCase();
    var input_array = input.split("");
    var has_error = false;
    var duplicte = [];

    if (index > -1)
    {
        check_memory(key);
    }
    else if (key == 'ESCAPE')
    {
        document.getElementById('password').value = "";
    }
    else if (key == 'BACKSPACE')
    {}
    else if (key == 'ENTER')
    {}
});
