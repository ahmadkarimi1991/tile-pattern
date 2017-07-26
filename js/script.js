var input, memory, input_memory;
input = '';
memory = [];
input_memory = [];

function check_memory(number)
{
    // Memory management
    var memory_index;
    memory_index = memory.indexOf(number);
    if (memory_index > -1)
    {
        memory.splice(memory_index, 1);
    }
    else
    {
        memory.push(number);
    }

    document.getElementById('password').value = memory.join("");

    // Turn on and off tiles
    if ( document.querySelector('[data-number="' + number + '"]').hasAttribute('data-active') )
    {
        document.querySelector('[data-number="' + number + '"]').removeAttribute('data-active');
    }
    else
    {
        document.querySelector('[data-number="' + number + '"]').setAttribute('data-active', '');
    }
}

document.querySelectorAll('.cell').forEach(function(cell, index)
{
    cell.addEventListener('click', function(e)
    {
        var number;
        number = this.getAttribute('data-number');
        check_memory(number);
    });
});

document.getElementById('password').addEventListener('keyup', function(e)
{
    var input_last, input_array;
    input = this.value.toUpperCase();
    input_last = input.charAt(input.length - 1);
    input_array = input.split("");
    input_array.forEach(function(item, index)
    {
        var i = memory.indexOf(item);
        if ( i > -1 )
        {
            document.getElementById('password').classList.add('error');
            return false;
        }
        else
        {
            if ( document.getElementById('password').classList.contains('error') )
            {
                document.getElementById('password').classList.remove('error');
            }
            memory.push(item);
            document.querySelector('[data-number="' + item + '"]').setAttribute('data-active', '');
        }
    });
});
