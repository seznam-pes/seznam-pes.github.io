function ToggleS80List() {
    var mylist = document.getElementById("s80-list");
    var displaySetting = mylist.style.display
    var tracklistbutton = document.getElementById("tracklist-button");

    if (displaySetting == 'block') {
        mylist.style.display = 'none';
        tracklistbutton.innerHTML = "Zobrazit seznam skladeb";
      }
      else {
        mylist.style.display = 'block';
        tracklistbutton.innerHTML = "Schovat seznam skladeb";
        tracklistbutton.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
}