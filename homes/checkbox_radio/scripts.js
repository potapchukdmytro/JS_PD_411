function formHandle(event) {
    event.preventDefault();

    const form = event.target;

    const values = {
        january: form["january"].checked,
        february: form["february"].checked,
        march: form["march"].checked,
        color: form["color"].value,
        font: form["font"].value
    }

    console.log(values);
}