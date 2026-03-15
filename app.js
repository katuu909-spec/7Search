(function () {
  'use strict';

  const textInput = document.getElementById('text-input');
  const extractBtn = document.getElementById('extract-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultsSection = document.getElementById('results-section');
  const resultsList = document.getElementById('results-list');
  const countEl = document.getElementById('count');
  const emptyState = document.getElementById('empty-state');

  // 7桁の数字を抽出（前後に数字が続かないもの）
  const SEVEN_DIGIT_REGEX = /\b\d{7}\b/g;

  function extractSevenDigitNumbers(text) {
    const matches = text.match(SEVEN_DIGIT_REGEX) || [];
    return [...new Set(matches)];
  }

  // FC2動画の直接URL（7桁ID）
  const FC2_VIDEO_BASE = 'https://video.fc2.com/ja/content/';

  function openFc2Video(number) {
    window.open(`${FC2_VIDEO_BASE}${number}`, '_blank');
  }

  function searchOnGoogle(number) {
    // FC2動画に関連する検索結果をヒットさせる
    const query = `FC2 ${number}`;
    const searchPath = `/search?q=${encodeURIComponent(query)}`;
    // googlechromes:// でSafariからでもChromeで開く
    const chromeUrl = `googlechromes://www.google.com${searchPath}`;
    const a = document.createElement('a');
    a.href = chromeUrl;
    a.target = '_blank';
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function renderResults(numbers) {
    if (numbers.length === 0) {
      resultsSection.hidden = true;
      emptyState.hidden = false;
      emptyState.querySelector('p').textContent = '7桁の数字は見つかりませんでした';
      return;
    }

    emptyState.hidden = true;
    resultsSection.hidden = false;
    countEl.textContent = `${numbers.length}件見つかりました`;

    resultsList.innerHTML = numbers
      .map(
        (num) => `
      <li>
        <span class="number">${num}</span>
        <div class="btn-group">
          <button type="button" class="search-btn fc2-btn" data-number="${num}">FC2動画</button>
          <button type="button" class="search-btn google-btn" data-number="${num}">Google検索</button>
        </div>
      </li>
    `
      )
      .join('');

    resultsList.querySelectorAll('.fc2-btn').forEach((btn) => {
      btn.addEventListener('click', () => openFc2Video(btn.dataset.number));
    });
    resultsList.querySelectorAll('.google-btn').forEach((btn) => {
      btn.addEventListener('click', () => searchOnGoogle(btn.dataset.number));
    });
  }

  function handleExtract() {
    const text = textInput.value.trim();
    if (!text) {
      emptyState.hidden = false;
      emptyState.querySelector('p').textContent =
        'テキストを貼り付けて「7桁の数字を抽出」をクリックしてください';
      resultsSection.hidden = true;
      return;
    }

    const numbers = extractSevenDigitNumbers(text);
    renderResults(numbers);
  }

  function handleClear() {
    textInput.value = '';
    textInput.focus();
    resultsSection.hidden = true;
    emptyState.hidden = false;
    emptyState.querySelector('p').textContent =
      'テキストを貼り付けて「7桁の数字を抽出」をクリックしてください';
  }

  extractBtn.addEventListener('click', handleExtract);
  clearBtn.addEventListener('click', handleClear);
})();
