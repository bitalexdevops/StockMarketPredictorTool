function quickchart(key) {
  const quickchartButtonEl = document.querySelector('#quickchartButton-' + key + ' button');
  quickchartButtonEl.disabled = true;  // To prevent multiple clicks.
  quickchartButtonEl.classList.add('colab-df-spinner');
  try {
    const charts = await google.colab.kernel.invokeFunction(
      'suggestCharts', [key], {});
  } catch (error) {
    console.error('Error during call to suggestCharts:', error);
  }
  quickchartButtonEl.classList.remove('colab-df-spinner');
  quickchartButtonEl.classList.add('colab-df-quickchart-complete');
}

(function () {
  let quickchartButtonEl = document.querySelector('#quickchartButton-' + key + ' button');
  quickchartButtonEl.style.display = google.colab.kernel.accessAllowed ? 'block' : 'none';

  // Add a click event listener to the button.
  quickchartButtonEl.addEventListener('click', function () {
    quickchart(key);
  });
})();
