function toggleDetails(checkbox, detailsId) {
    var details = document.getElementById(detailsId);
    if (checkbox.checked) {
        details.style.display = 'table-row';
    } else {
        details.style.display = 'none';
    }
}
function showForm() {
    var selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption) {
        document.getElementById('form-container').style.display = 'block';
    } else {
        alert('يرجى اختيار عقار.');
    }
}

var captchaCode;

    function generateCaptcha() {
        captchaCode = Math.floor(1000 + Math.random() * 9000).toString();
        document.getElementById('captchaCode').innerText = captchaCode;
    }

function validateForm() {
    var nationalId = document.getElementById('nationalId').value;
    var name = document.getElementById('name').value;
    var birthDate = document.getElementById('birthDate').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;
    var captchInput = document.getElementById('captcha').value;

    

    var nationalIdPattern = /^(0[1-9]|1[0-4])\d{9}$/;
    var namePattern = /^[\u0621-\u064A\s]+$/;
    var datePattern = /^\d{2}-\d{2}-\d{4}$/;
    var mobilePattern = /^(09(3|4|5|6|8|9)\d{7})$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!nationalIdPattern.test(nationalId)) {
        alert('يرجى إدخال رقم وطني صحيح.');
        return false;
    }

    if (name && !namePattern.test(name)) {
        alert('يرجى إدخال اسم صحيح باللغة العربية.');
        return false;
    }

    if (birthDate && !datePattern.test(birthDate)) {
        alert('يرجى إدخال تاريخ ميلاد صحيح بالشكل dd-mm-yyyy.');
        return false;
    }

    if (mobile && !mobilePattern.test(mobile)) {
        alert('يرجى إدخال رقم موبايل صحيح.');
        return false;
    }

    if (email && !emailPattern.test(email)) {
        alert('يرجى إدخال بريد إلكتروني صحيح.');
        return false;
    }

    if (captchInput !== captchaCode) {
        alert('رمز Captcha غير صحيح.');
        return false;
    }

    alert('تم تقديم الطلب بنجاح.');
    return true; }    


window.onload = generateCaptcha;