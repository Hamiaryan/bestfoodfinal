
    // Use JavaScript to generate quantity options
    document.addEventListener("DOMContentLoaded", function () {
        var quantitySelects = document.querySelectorAll(".quantity");

        quantitySelects.forEach(function (quantitySelect) {
            for (var i = 1; i <= 10; i++) {
                var option = document.createElement("option");
                option.value = i;
                option.text = i;
                quantitySelect.add(option);
            }
        });
    });



