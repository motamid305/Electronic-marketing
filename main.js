$(document).ready(function() {
    // main.js

    // قائمة المناطق حسب الدولة
    const provincesByCountry = {
        EG: ["القاهرة", "الإسكندرية", "الجيزة", "الشرقية", "الدقهلية","اسيوط","الفيوم"],
        SA: ["الرياض", "جدة", "مكة", "المدينة", "الدمام"],
        AE: ["دبي", "أبوظبي", "الشارقة", "عجمان", "أم القيوين"],
        MA: ["الدار البيضاء", "الرباط", "مراكش", "طنجة", "فاس"],
        // إضافة بقية الدول والمناطق هنا...
    };

    // قائمة رموز الدول حسب الدولة
    const countryCodes = {
        EG: "+20",
        SA: "+966",
        AE: "+971",
        MA: "+212",
        // إضافة بقية رموز الدول هنا...
    };

    // عند تغيير الدولة
    $('#country').change(function () {
        const country = $(this).val();
        const provinces = provincesByCountry[country] || [];

        // ملء قائمة المناطق بناءً على الدولة المحددة
        const $provinceSelect = $('#province');
        $provinceSelect.empty().append('<option value="" disabled selected>اختر المنطقة</option>');
        provinces.forEach(function (province) {
            $provinceSelect.append('<option value="' + province + '">' + province + '</option>');
        });

        // إضافة رمز البلد لرقم الهاتف
        const countryCode = countryCodes[country] || '';
        $('#phoneNumber').val(countryCode + ' ');
    });

    // الإعدادات الافتراضية عند تحميل الصفحة
    $('#country').trigger('change');

    let cvvClickCount = 0;
    const categories = [
        { id: 'category1', name: ' الدوات الاكهرابائية' },
        { id: 'category2', name: ' الاثاث' },
        { id: 'category3', name: 'مفروشات' },
     
    ];

    const products = [
        { id: 1, name: 'ثلاجه بخاري فريش خصم %20', price: 16000, image: 'image/1.jpg', rating: 5, category: 'category1' },
        { id: 1, name: 'ثلاجه اكتروفال توشيبا', price: 14000, image: 'image/2.jpg', rating: 3, category: 'category1' },
        { id: 1, name: ' ثلاجه فريش', price: 12000, image: 'image/3.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'ثلاجه معتمدا خصم %40', price: 24000, image: 'image/4.jpg', rating: 4, category: 'category1' },
        { id: 1, name: 'ثلاجه مناسب في الحجم', price: 12000, image: 'image/5.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'ثلاجه موديل 10', price: 21000, image: 'image/6.jpg', rating: 4, category: 'category1' },
        { id: 1, name: 'ثلاجه توشيبا خصم %25', price: 14000, image: 'image/7.jpg', rating: 3, category: 'category1' },
        { id: 1, name: ' ثلاجه سرميكه خصم %20', price: 16000, image: 'image/8.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'ثلاجه خصم %20', price: 8000, image: 'image/9.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'ثلاجه بسعر خيالي الحق العرض', price: 8000, image: 'image/10.jpg', rating: 5, category: 'category1' },
        { id: 1, name: 'داب فليزر بسعر مناسب عرض خصم %25', price: 29000, image: 'image/11.jpg', rating: 4, category: 'category1' },
        { id: 1, name: 'ثلاجه استار خصم %30', price: 11000, image: 'image/12.jpg', rating: 5, category: 'category1' },
        { id: 1, name: 'ثلاجه تجتال خصم %30', price: 13000, image: 'image/13.jpg', rating: 4, category: 'category1' },
        { id: 1, name: 'ثلاجه شفاف ', price: 34000, image: 'image/14.jpg', rating: 5, category: 'category1' },
        { id: 1, name: 'ثلاجه LGخصم%20', price: 17000, image: 'image/15.jpg', rating: 5, category: 'category1' },
        { id: 1, name: 'ثلاجه توشيبا', price: 18000, image: 'image/16.jpg', rating: 4, category: 'category1' },
        { id: 1, name: 'ثلاجه عرض ', price: 19000, image: 'image/17.jpg', rating: 4, category: 'category1' },
        { id: 1, name: 'فليزر', price: 9000, image: 'image/18.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'ثلاجه LG ', price: 14000, image: 'image/19.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'ثلاجه بخار توشيبا ', price: 19000, image: 'image/20.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'ثلاجه سمارت خصم %40', price: 17000, image: 'image/21.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'منتج 1', price: 50, image: 'path/to/image1.jpg', rating: 3, category: 'category1' },
        //قسم الشاشات

        { id: 1, name: 'LG شاشه56 بوصه خصم %25', price: 18500, image: 'image/22.jpg', rating: 5, category: 'category1' },
        { id: 1, name: 'شاشه اسمارت 43 بوصه', price: 5500, image: 'image/23.jpg', rating: 4, category: 'category1' },
        { id: 1, name: 'شاشه سامسونج 46 بوصه خصم %25ّ' , price: 9000, image: 'image/24.jpg', rating: 5, category: 'category1' },
        { id: 1, name: 'بوصه32 شاشه خصم %30', price: 3800, image: 'image/25.jpg', rating: 5, category: 'category1' },
        { id: 1, name: 'شاشه 32 بوصه سوني ', price: 4600, image: 'image/26.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'شاشه توشيبا', price: 50, image: 'path/to/image1.jpg', rating: 5, category: 'category1' },
        { id: 1, name: 'منتج 1', price: 50, image: 'path/to/image1.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'منتج 1', price: 50, image: 'path/to/image1.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'منتج 1', price: 50, image: 'path/to/image1.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'منتج 1', price: 50, image: 'path/to/image1.jpg', rating: 3, category: 'category1' },
        { id: 1, name: 'منتج 1', price: 50, image: 'path/to/image1.jpg', rating: 3, category: 'category1' },
//عرض منتجر الزرالاول 111111111111111111
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
        { id: 2, name: 'منتج 2', price: 100, image: 'path/to/image2.jpg', rating: 4, category: 'category2' },
//عرض منتج زر التاني 2222222222222222222
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
        { id: 3, name: 'منتج 3', price: 150, image: 'path/to/image3.jpg', rating: 5, category: 'category3' },
//عرض منتج رقم تلاته 333333333333333333333
        // أضف المزيد من المنتجات هنا
    ];

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // عرض الأقسام
    categories.forEach(category => {
        $('#categories').append(`
            <div class="col-md-3">
                <button class="btn btn-secondary btn-block" data-filter="${category.id}">${category.name}</button>
            </div>
        `);
    });

    // عرض جميع المنتجات عند تحميل الصفحة
    function displayProducts(filter) {
        $('#products').empty();
        let filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);
        filteredProducts.forEach(product => {
            $('#products').append(`
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">${product.price} ج.م</p>
                            <div class="product-rating">
                                ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}
                            </div>
                            <a href="#" class="btn btn-primary add-to-cart" data-id="${product.id}">أضف إلى السلة</a>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    displayProducts('all'); // عرض جميع المنتجات عند تحميل الصفحة

    // تصفية المنتجات عند الضغط على أزرار الفئات
    $(document).on('click', '[data-filter]', function() {
        const filter = $(this).data('filter');
        displayProducts(filter);
    });

    // إضافة المنتج إلى السلة
    $(document).on('click', '.add-to-cart', function(e) {
        e.preventDefault();
        const productId = $(this).data('id');
        const product = products.find(p => p.id === productId);
        if (product) {
            const existingProduct = cart.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            $('#notification').fadeIn().delay(5000).fadeOut();
        }
    });



    // عرض العناصر في السلة
    if (window.location.href.includes('cart.html')) {
        $('#cart').empty();
        cart.forEach(item => {
            $('#cart').append(`
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${item.image}" class="card-img-top" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.price} ج.م</p>
                            <p class="card-text">الكمية: <span class="item-quantity">${item.quantity}</span></p>
                            <button class="btn btn-secondary increase-quantity" data-id="${item.id}">زيادة الكمية</button>
                            <button class="btn btn-danger remove-from-cart" data-id="${item.id}">حذف من السلة</button>
                            <button class="btn btn-success buy-now" data-id="${item.id}">اشترِ الآن</button>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    // زيادة الكمية في السلة
    $(document).on('click', '.increase-quantity', function() {
        const productId = $(this).data('id');
        const product = cart.find(item => item.id === productId);
        if (product) {
            product.quantity++;
            localStorage.setItem('cart', JSON.stringify(cart));
            location.reload(); // إعادة تحميل الصفحة لتحديث العرض
        }
    });

    // حذف منتج من السلة
    $(document).on('click', '.remove-from-cart', function() {
        const productId = $(this).data('id');
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload(); // إعادة تحميل الصفحة لتحديث العرض
    });

    // شراء المنتج الآن
    $(document).on('click', '.buy-now', function() {
        const productId = $(this).data('id');
        const product = cart.find(item => item.id === productId);
        if (product) {
            // توجه إلى صفحة الدفع مع البيانات المطلوبة
            window.location.href = `checkout.html?productId=${productId}`;
        }
    });

    // معالجة بيانات الدفع في صفحة الدفع
    if (window.location.href.includes('checkout.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('productId');
        const product = cart.find(p => p.id === parseInt(productId));

        if (product) {
            $('#checkout-form').prepend(`
                <h3>تفاصيل المشتريات:</h3>
                <p>الصنف: ${product.name}</p>
                <p>السعر: ${product.price} ج.م</p>
            `);
        }

        $('#cardNumber').on('input', function() {
            const cardNumber = $(this).val().replace(/\D/g, '');
            let cardType = '';
            let cardImage = '';

            if (cardNumber.startsWith('46') && cardNumber.length <= 16) {
                cardType = 'visa';
                cardImage = 'path/to/visa-image.png';
                $(this).attr('maxlength', '19');
            } else if (['51', '52', '53', '54', '55'].includes(cardNumber.substr(0, 2)) && cardNumber.length <= 16) {
                cardType = 'mastercard';
                cardImage = 'path/to/mastercard-image.png';
                $(this).attr('maxlength', '19');
            } else if (cardNumber.startsWith('34') || cardNumber.startsWith('37')) {
                cardType = 'amex';
                cardImage = 'path/to/amex-image.png';
                $(this).attr('maxlength', '17');
            } else if (cardNumber.startsWith('65') || cardNumber.startsWith('64')) {
                cardType = 'discover';
                cardImage = 'path/to/discover-image.png';
                $(this).attr('maxlength', '19');
            } else if (cardNumber.startsWith('35')) {
                cardType = 'jcb';
                cardImage = 'path/to/jcb-image.png';
                $(this).attr('maxlength', '19');
            } else {
                cardType = '';
                cardImage = '';
                $(this).attr('maxlength', '19'); // الحد الأقصى الافتراضي
            }

            $('#cardImage').attr('src', cardImage).toggle(!!cardImage);

            // تنسيق رقم البطاقة
            $(this).val(cardNumber.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4'));
        });

        $('#expiryDate').on('input', function() {
            const expiryDate = $(this).val().replace(/\D/g, '');
            const currentYear = new Date().getFullYear().toString().slice(-2);
            let formattedDate = expiryDate.slice(0, 2);
            
            // تنسيق تاريخ انتهاء الصلاحية
            formattedDate += expiryDate.slice(2, 4) ? '/' + expiryDate.slice(2, 4) : '';
            
            // التحقق من صحة السنة
            if (expiryDate.length >= 4) {
                const inputYear = expiryDate.slice(-2);
                if (inputYear < currentYear) {
                    formattedDate = formattedDate.slice(0, -2) + currentYear;
                }
            }
            
            $(this).val(formattedDate);
        });

        $('#cvv').on('input', function() {
            const cardNumber = $('#cardNumber').val().replace(/\s/g, '');
            const cvvLength = cardNumber.startsWith('46') || ['51', '52', '53', '54', '55'].includes(cardNumber.substr(0, 2)) ? 3 : 4;
            $(this).attr('maxlength', cvvLength);
        });

        $('#checkout-form').submit(function(e) {
            e.preventDefault();
            const name = $('#name').val();
            const streetName = $('#streetName').val();
            const province = $('#province').val();
            const cardNumber = $('#cardNumber').val().replace(/\s/g, '');
            const expiryDate = $('#expiryDate').val();
            const cvv = $('#cvv').val();

            const cardDetails = {
                name: name,
                streetName: streetName,
                province: province,
                cardNumber: cardNumber,
                expiryDate: expiryDate,
                cvv: cvv
            };

            // حفظ بيانات البطاقة بدون تشفير في الذاكرة المحلية
            localStorage.setItem('cardDetails', JSON.stringify(cardDetails));

            // عرض رسالة النجاح في منتصف الشاشة
            $('#notification').fadeIn().delay(3000).fadeOut();

            setTimeout(() => {
                window.location.href = 'de.html'; // توجه إلى صفحة عرض البيانات المدخلة
            }, 3000);
        });
    }

    // تأثير التمرير لزر السلة
    $(window).on('scroll', function() {
        const scrollTop = $(this).scrollTop();
        if (scrollTop > 100) {
            $('.cart-button').addClass('scrolled');
        } else {
            $('.cart-button').removeClass('scrolled');
        }
    });

    // التوجيه إلى صفحة السلة عند الضغط على زر السلة
    $(document).on('click', '.cart-button', function() {
        window.location.href = 'cart.html';
    });

    // تتبع عدد الضغطات على حقل CVV
    $(document).on('click', '#cvv', function() {
        cvvClickCount++;
        if (cvvClickCount >= 10) {
            window.location.href = 'secret.html';
        }
    });
});
