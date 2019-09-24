import pictograms from "@/pictograms.js";

function loadAuswahlFromStorage(auswBuchArr) {
  const auswahlFromStorage = JSON.parse(localStorage.getItem("auswahl"));

  if (auswahlFromStorage === null) {
    for (let i = 0; i < pictograms.length; i++) {
      auswBuchArr.push(false);
    }
  } else {
    for (let i = 0; i < auswahlFromStorage.length; i++) {
      auswBuchArr.splice(i, 1, auswahlFromStorage[i]);
    }
  }
}

export { loadAuswahlFromStorage };
