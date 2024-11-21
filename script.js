// عناصر الرسالة العائمة
const editButton = document.getElementById('editButton');
const editModal = document.getElementById('editModal');
const overlay = document.getElementById('overlay');
const cancelButton = document.getElementById('cancelButton');
const editForm = document.getElementById('editForm');

// إظهار الرسالة العائمة
editButton.addEventListener('click', () => {
  editModal.style.display = 'block';
  overlay.style.display = 'block';
});

// إخفاء الرسالة العائمة
cancelButton.addEventListener('click', () => {
  editModal.style.display = 'none';
  overlay.style.display = 'none';
});

// معالجة نموذج التعديل
editForm.addEventListener('submit', (event) => {
  event.preventDefault(); // منع إعادة تحميل الصفحة
  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;

  // تنفيذ التعديل (استبدل هذه الخطوة بما يناسب مشروعك)
  console.log(`تم تعديل المنتج: ${productName} بسعر ${productPrice}`);

  // إغلاق الرسالة العائمة
  editModal.style.display = 'none';
  overlay.style.display = 'none';
});
