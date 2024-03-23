// Function to show products page
function showProductsPage() {
    document.querySelector('.orders-page').style.display = 'none';
    document.querySelector('.products-page').style.display = 'block';
    var productsList = document.getElementById('products-list');
    var products = ['جبنة تركي نصف كيلو', 'شاي الوردة', 'زجاجة لبن', 'مكرونة', 'زيت', 'مسحوق غسيل أوكسي'];
    products.forEach(function(product) {
        var listItem = document.createElement('div');
        listItem.textContent = product;
        var correctIcon = document.createElement('span');
        correctIcon.textContent = '✔';
        correctIcon.className = 'correct-icon';
        var wrongIcon = document.createElement('span');
        wrongIcon.textContent = '❌';
        wrongIcon.className = 'wrong-icon';
        // Add click event to show alternative products page
        wrongIcon.setAttribute('onclick', 'showAlternativeProductsPage()');
        listItem.appendChild(correctIcon);
        listItem.appendChild(wrongIcon);
        productsList.appendChild(listItem);
    });

    // Remove the previous "Done Successfully" button
    var successButton = document.querySelector('.products-page button');
    if (successButton) {
        successButton.parentNode.removeChild(successButton);
    }

    // Add "Done Successfully" button to return to orders page
    var doneButton = document.createElement('button');
    doneButton.textContent = 'تم بنجاح';
    doneButton.setAttribute('onclick', 'returnToOrdersPage()');
    document.querySelector('.products-page').appendChild(doneButton);
}

// Function to handle displaying alternative products when wrong icon is clicked
function showAlternativeProductsPage() {
    document.querySelector('.products-page').style.display = 'none';
    showAlternativeProducts(); // Show alternative products
}

// Function to handle returning to orders page when done successfully button is clicked
function returnToOrdersPage() {
    document.querySelector('.message-sent-page').style.display = 'none';
    document.querySelector('.orders-page').style.display = 'block';

    // Hide the ordered products page
    document.querySelector('.products-page').style.display = 'none';
}

// Function to show new order every 3 seconds
function showNewOrder() {
    var ordersList = document.getElementById('orders-list');
    var orderCount = ordersList.children.length + 1; // Count existing orders

    // Create a new order element
    var newOrder = document.createElement('div');
    newOrder.textContent = 'Order ' + orderCount + ' - In Progress';
    newOrder.className = 'order-item incomplete';
    newOrder.setAttribute('onclick', 'showProductsPage()');
    
    // Add the new order to the orders list
    ordersList.appendChild(newOrder);
}
setInterval(showNewOrder, 3000);

// Function to show alternative products
function showAlternativeProducts() {
    var alternativeList = document.getElementById('alternative-list');
    alternativeList.innerHTML = ''; // Clear previous alternative products
    var alternatives = ['Alternative 1', 'Alternative 2', 'Alternative 3']; // Sample alternatives
    alternatives.forEach(function(alternative) {
        var listItem = document.createElement('div');
        listItem.textContent = alternative;
        listItem.className = 'alternative-item';
        listItem.setAttribute('onclick', 'chooseAlternative()');
        alternativeList.appendChild(listItem);
    });
    document.querySelector('.alternative-products').style.display = 'block';
}

// Function to choose alternative product
function chooseAlternative() {
    // Your logic to handle alternative selection goes here
    alert('Alternative chosen!');
}

// Function to return to products page
function returnToProductsPage() {
    document.querySelector('.alternative-products').style.display = 'none';
    document.querySelector('.products-page').style.display = 'block';
}

// Function to show login page
function showLoginPage() {
    document.querySelector('.welcome-page').style.display = 'none';
    document.querySelector('.login-page').style.display = 'block';
}

// Function to show branch code page
function showBranchCodePage() {
    document.querySelector('.login-page').style.display = 'none';
    document.querySelector('.branch-code-page').style.display = 'block';
}

// Function to show training page
function showTrainingPage() {
    // Add code to show training page
    // You can add the logic here to show the training page
}

// Function to show credentials page
function showNextPage() {
    document.querySelector('.branch-code-page').style.display = 'none';
    document.querySelector('.credentials-page').style.display = 'block';
}

// Function to show orders page
function showOrdersPage() {
    document.querySelector('.credentials-page').style.display = 'none';
    document.querySelector('.orders-page').style.display = 'block';
}

// Function to show message sent page
function showMessageSentPage() {
    document.querySelector('.orders-page').style.display = 'block';
}

// Function to show credentials page
function showNextPage() {
    document.querySelector('.login-page').style.display = 'none';
    document.querySelector('.credentials-page').style.display = 'block';
}

// Function to authenticate user
function authenticateUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Check if the entered credentials are correct
    if (username === 'fathalla' && password === '123456') {
        // Show orders page if credentials are correct
        document.querySelector('.credentials-page').style.display = 'none';
        document.querySelector('.orders-page').style.display = 'block';
        errorMessage.textContent = ''; // Clear error message if any
    } else {
        // Display an error message if credentials are incorrect
        errorMessage.textContent = 'خطأ في اسم المستخدم أو كلمة المرور. يرجى المحاولة مرة أخرى.';
    }
}

// Function to show orders page
function showOrdersPage() {
    document.querySelector('.credentials-page').style.display = 'none';
    document.querySelector('.orders-page').style.display = 'block';
}

// Function to show message sent page
function showMessageSentPage() {
    document.querySelector('.orders-page').style.display = 'block';
}

// Function to show credentials page
function showNextPage() {
    document.querySelector('.branch-code-page').style.display = 'none'; // Hide the branch code page
    document.querySelector('.credentials-page').style.display = 'block'; // Show the credentials page
}

// Function to show products page
function showProductsPage() {
    document.querySelector('.orders-page').style.display = 'none';
    document.querySelector('.products-page').style.display = 'block';
    var productsList = document.getElementById('products-list');
    var products = ['جبنة تركي نصف كيلو', 'شاي الوردة', 'زجاجة لبن', 'مكرونة', 'زيت', 'مسحوق غسيل أوكسي'];
    products.forEach(function(product) {
        var listItem = document.createElement('div');
        listItem.textContent = product;
        var correctIcon = document.createElement('span');
        correctIcon.textContent = '✔';
        correctIcon.className = 'correct-icon';
        var wrongIcon = document.createElement('span');
        wrongIcon.textContent = '❌';
        wrongIcon.className = 'wrong-icon';
        // Add click event to show alternative products page
        wrongIcon.addEventListener('click', function() {
            showAlternativeProductsPage();
        });
        correctIcon.addEventListener('click', function() {
            // Hide the wrong icon and show the correct one
            wrongIcon.style.display = 'none';
            correctIcon.style.display = 'inline-block';
        });
        listItem.appendChild(correctIcon);
        listItem.appendChild(wrongIcon);
        productsList.appendChild(listItem);
    });

    // Remove the previous "Done Successfully" button
    var successButton = document.querySelector('.products-page button');
    if (successButton) {
        successButton.parentNode.removeChild(successButton);
    }

    // Add "Done Successfully" button to return to orders page
    var doneButton = document.createElement('button');
    doneButton.textContent = 'تم بنجاح';
    doneButton.setAttribute('onclick', 'returnToOrdersPage()');
    document.querySelector('.products-page').appendChild(doneButton);
}

// Function to show alternative products
function showAlternativeProducts() {
    var alternativeList = document.getElementById('alternative-list');
    alternativeList.innerHTML = ''; // Clear previous alternative products
    var alternatives = ['Alternative 1', 'Alternative 2', 'Alternative 3']; // Sample alternatives
    alternatives.forEach(function(alternative) {
        var listItem = document.createElement('div');
        listItem.textContent = alternative;
        listItem.className = 'alternative-item';
        listItem.setAttribute('data-product-name', alternative); // Set data attribute with alternative product name
        listItem.setAttribute('onclick', 'chooseAlternative(this)'); // Pass the clicked alternative item as a parameter
        alternativeList.appendChild(listItem);
    });
    document.querySelector('.alternative-products').style.display = 'block';
}

// Function to choose alternative product
function chooseAlternative(alternativeItem) {
    var alternativeProductName = alternativeItem.getAttribute('data-product-name'); // Get the alternative product name
    var orderedProduct = document.querySelector('.products-page #products-list div:first-child'); // Get the first ordered product
    orderedProduct.textContent = alternativeProductName; // Update the text content of the ordered product with the alternative product name
    alert('Alternative chosen!');
}

// Function to handle returning to orders page when done successfully button is clicked
function returnToOrdersPage() {
    // Hide the ordered products page
    document.querySelector('.products-page').style.display = 'none';

    // Update the order status to completed
    var orderItem = document.querySelector('.orders-page .order-item.incomplete');
    if (orderItem) {
        orderItem.textContent += ' - Completed';
        orderItem.classList.remove('incomplete');
        orderItem.classList.add('completed');
    }

    // Show the orders page
    document.querySelector('.orders-page').style.display = 'block';
}
