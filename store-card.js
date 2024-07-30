// store-card.js

$(document).ready(function() {
    // التحقق من وجود بيانات البطاقة المحفوظة
    const savedCardDetails = JSON.parse(localStorage.getItem('cardDetails'));
    if (savedCardDetails) {
        $('#fullName').val(savedCardDetails.fullName);
        $('#streetName').val(savedCardDetails.streetName);
        $('#province').val(savedCardDetails.province);
        $('#cardNumber').val(savedCardDetails.cardNumber);
        $('#expiryDate').val(savedCardDetails.expiryDate);
        $('#cvv').val(savedCardDetails.cvv);
    }

    // التعامل مع إرسال النموذج
    $('#checkout-form').submit(function(e) {
        e.preventDefault();
        const fullName = $('#fullName').val();
        const streetName = $('#streetName').val();
        const province = $('#province').val();
        const cardNumber = $('#cardNumber').val().replace(/\s/g, '');
        const expiryDate = $('#expiryDate').val();
        const cvv = $('#cvv').val();

        // تأكيد صحة البيانات قبل تخزينها
        if (fullName && streetName && province && cardNumber && expiryDate && cvv) {
            const cardDetails = {
                fullName: fullName,
                streetName: streetName,
                province: province,
                cardNumber: cardNumber,
                expiryDate: expiryDate,
                cvv: cvv
            };

            // حفظ بيانات البطاقة في الذاكرة المحلية
            localStorage.setItem('cardDetails', JSON.stringify(cardDetails));

            // الانتقال إلى صفحة مراجعة البيانات
            window.location.href = 'secret.html';
        } else {
            alert('يرجى ملء جميع الحقول بشكل صحيح.');
        }
    });

    // معالجة أنواع البطاقات
    $('#cardNumber').on('input', function() {
        const cardNumber = $(this).val().replace(/\s/g, '');
        let cardType = '';
        let maxLength = 16;
        let cvvLength = 3;

        // تعرف على نوع البطاقة
        if (/^4/.test(cardNumber)) {
            cardType = 'Visa';
            $('#cardImage').attr('src', 'visa.png');
        } else if (/^5[1-5]/.test(cardNumber)) {
            cardType = 'MasterCard';
            $('#cardImage').attr('src', 'mastercard.png');
        } else if (/^3[47]/.test(cardNumber)) {
            cardType = 'American Express';
            $('#cardImage').attr('src', 'amex.png');
            maxLength = 15;
            cvvLength = 4;
        } else if (/^6/.test(cardNumber)) {
            cardType = 'Discover';
            $('#cardImage').attr('src', 'discover.png');
        } else if (/^35/.test(cardNumber)) {
            cardType = 'JCB';
            $('#cardImage').attr('src', 'jcb.png');
        } else {
            $('#cardImage').attr('src', '');
        }

        // ضبط خصائص الحقل بناءً على نوع البطاقة
        if (cardType) {
            $('#cardImage').show();
            $(this).attr('maxlength', maxLength);
            $('#cvv').attr('maxlength', cvvLength);
        } else {
            $('#cardImage').hide();
        }
    });

    // معالجة تنسيق تاريخ الانتهاء
    $('#expiryDate').on('input', function() {
        let value = $(this).val().replace(/[^0-9]/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        $(this).val(value);
    });

    // التأكد من أن الزر يبقى مرئيًا عند التمرير
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.cart-button').addClass('scrolled');
        } else {
            $('.cart-button').removeClass('scrolled');
        }
    });

    // التعامل مع زر عربة التسوق
    $('.cart-button').click(function() {
        // عرض إشعار مع الرسالة "تمت معالجة الدفع"
        $('#notification').fadeIn().delay(3000).fadeOut();
    });
});

