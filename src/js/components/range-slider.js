const createRangeSlader = () => {
  const host = "https://lansvetyk.github.io/SitDownPls_prod/";
  // JAVASCRIPT FOR INDEX PAGE
  if (window.location.href == host + "catalog.html") {
    const rangeSlider = document.getElementById("range-slider");
    if (rangeSlider) {
      noUiSlider.create(rangeSlider, {
        start: [2000, 150000],
        step: 1,
        connect: true,
        range: {
          min: [2000],
          max: [150000],
        },
      });

      const input0 = document.getElementById("input-0");
      const input1 = document.getElementById("input-1");
      const inputs = [input0, input1];

      rangeSlider.noUiSlider.on("update", function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
      });
      const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        console.log(arr);
        rangeSlider.noUiSlider.set(arr);
      };

      inputs.forEach((el, index) => {
        el.addEventListener("change", (e) => {
          setRangeSlider(index, e.currentTarget.value);
        });
      });
    }
  }
};
createRangeSlader();
