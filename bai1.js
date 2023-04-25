const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
  // Remove all show and border classes
  removeBorder();
  removeShow();
  // Add border to current tab item
  this.classList.add('tab-border');
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-border');
  });
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
}

// Listen for tab item click
tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
});



(function() {
  "use strict";

  fb.events.form.mounted = [function (state) {
    // フォームのコンテンツ部分の要素を取得します
    var formContent = document.getElementsByClassName('fb-content')[0];

    // ボタンを作成します
    var submitButton = document.createElement('input');
    submitButton.type = 'button';
    submitButton.value = 'submit';
    // ボタンが押された際に現在のフォームを強制的に回答するように設定します
    submitButton.onclick = fb.forceSubmitForm;

    // 作成したボタンをフォームのコンテンツ部分の要素の先頭に追加します
    formContent.insertBefore(submitButton, formContent.firstChild);

    return state;
  }];
})();